'use client'

import MatchesDetails from '@/modules/matches/match-details/MatchDetails'
import { Box } from '@kuma-ui/core'
import { useSearchParams } from 'next/navigation'

export default function MatchDetailsPage() {
  const searchParams = useSearchParams()
  const eventId = searchParams.get('event')

  return (
    <>
      {eventId && (
        <Box>
          <MatchesDetails matchId={eventId} closable={true} />
        </Box>
      )}
    </>
  )
}
