'use client'

import { sports, event } from '@/api/routes'
import Breadcrumbs from '@/components/Breadcrumbs'
import { Sport, Match } from '@/model/Backend'
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
  const {
    data: eventData,
    error,
    mutate,
  } = useSWRImmutable<Match>(event(eventId || ''), { errorRetryCount: eventId ? 10 : 0 })

  useEffect(() => {
    mutate()
  }, [eventId])

  useEffect(() => {
    const temp: string[] = []
    if (params.sport && sportsData) temp.push(sportsData.find(sport => sport.slug === params.sport)?.name || 'Unknown')
    if (eventId && eventData) temp.push(eventData.tournament.name, toTitleCase(eventData.slug.replace('-', ' ')))

    setLocalItems(temp)
  }, [params, searchParams, sportsData, eventData])

  return (
    <>
      <Box paddingX="spacings.lg">
        <Breadcrumbs items={localItems} />
      </Box>
    </>
  )
}
