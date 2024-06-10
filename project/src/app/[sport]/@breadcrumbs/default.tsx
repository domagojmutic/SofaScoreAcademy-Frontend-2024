'use client'

import { sports, event, tournament, team } from '@/api/routes'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Sport, Match, Tournament, Team } from '@/model/Backend'
import { Box } from '@kuma-ui/core'
import { useParams, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import useSWRImmutable from 'swr/immutable'

export default function MatchDetailsPage() {
  const [localItems, setLocalItems] = useState<string[]>([])

  const params = useParams()
  const searchParams = useSearchParams()
  const eventId = (params.eventId as string) || searchParams.get('event')

  const { data: sportsData } = useSWRImmutable<Sport[]>(sports())
  const { data: tournamentData } = useSWRImmutable<Tournament>(
    params.tournamentId ? tournament(params.tournamentId as string) : null
  )
  const { data: teamData } = useSWRImmutable<Team>(params.teamId ? team(params.teamId as string) : null)
  const {
    data: eventData,
    error,
    mutate,
  } = useSWRImmutable<Match>(eventId ? event(eventId) : null, { shouldRetryOnError: !!eventId })

  useEffect(() => {
    mutate()
  }, [eventId])

  useEffect(() => {
    const temp: string[] = []
    if (params.sport && sportsData) temp.push(sportsData.find(sport => sport.slug === params.sport)?.name || 'Unknown')
    if (eventId && eventData)
      temp.push(eventData.tournament.name, eventData.homeTeam.name + ' vs ' + eventData.awayTeam.name)
    else if (params.tournamentId && tournamentData) temp.push(tournamentData.name)
    else if (params.teamId && teamData) temp.push(teamData.name)

    setLocalItems(temp)
  }, [params, searchParams, sportsData, eventData, tournamentData, teamData])

  return (
    <>
      <Box display={['none', 'none', 'block', 'block']} paddingX="spacings.lg">
        <Breadcrumbs items={localItems} />
      </Box>
    </>
  )
}
