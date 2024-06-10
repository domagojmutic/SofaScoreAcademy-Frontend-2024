'use client'

import MatchesDetails from '@/modules/matches/match-details/MatchDetails'
import MatchesDetailsMobile from '@/modules/matches/match-details/MatchDetailsMobile'
import { Box } from '@kuma-ui/core'
import { useParams } from 'next/navigation'

export default function MatchDetailsPage() {
  const params = useParams()

  return (
    <>
      <Box display={['none', 'none', 'block', 'block']}>
        <MatchesDetails matchId={params.eventId as string} closable={false} />
      </Box>
      <Box display={['block', 'block', 'none', 'none']}>
        <MatchesDetailsMobile matchId={params.eventId as string} closable={false} />
      </Box>
    </>
  )
}
