'use client'

import { sports, event, tournament } from '@/api/routes'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Sport, Match, Tournament } from '@/model/Backend'
import { toTitleCase } from '@/utils/stringUtils'
import { Box } from '@kuma-ui/core'
import { useParams, useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import useSWRImmutable from 'swr/immutable'

export default function MatchDetailsPage() {
  const [localItems, setLocalItems] = useState<string[]>([])

  const params = useParams()
  const searchParams = useSearchParams()
  const eventId = searchParams.get('event')

  const { data: sportsData } = useSWRImmutable<Sport[]>(sports())
  const { data: tournamentData } = useSWRImmutable<Tournament>(
    params.tournamentId ? tournament(params.tournamentId as string) : null
  )
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

    setLocalItems(temp)
  }, [params, searchParams, sportsData, eventData, tournamentData])

  return (
    <>
      <Box display={['none', 'none', 'block', 'block']} paddingX="spacings.lg">
        <Breadcrumbs items={localItems} />
      </Box>
    </>
  )
}
