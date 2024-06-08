'use client'
import { EventIncident, Match } from '@/model/Backend'
import useSWR from 'swr'
import Card from '@/components/Card'
import { event } from '@/api/routes'
import MatchesDetailsCloseHeader from './components/MatchDetailsCloseHeader'
import MatchDetailsTotal from './components/MatchDetailsTotal'
import MatchesIncidentList from './components/match-incidents/MatchIncidentsList'
import { useParams } from 'next/navigation'
import MatchDetailsTotalSkeleton from './components/MatchDetailsTotalSkeleton'
import Breadcrumbs from '@/components/Breadcrumbs'

interface MatchDetailsMobileProps {
  matchId: string
  closable: boolean
  matchServer?: Match
  matchIncidentServer?: EventIncident[]
}

export default function MatchesDetailsMobile({
  matchId,
  closable,
  matchServer,
  matchIncidentServer,
}: MatchDetailsMobileProps) {
  const params = useParams()
  const {
    data: match,
    error,
    isLoading,
  } = useSWR<Match>(event(matchId), {
    fallbackData: `${matchServer && matchServer.id}` == matchId ? matchServer : undefined,
  })

  return (
    <>
      <Card overflow="hidden" paddingBottom="spacings.lg" borderRadius={0}>
        {match && (
          <Breadcrumbs
            items={[
              match.tournament.sport.name,
              match.tournament.name,
              match.homeTeam.name + ' vs ' + match.awayTeam.name,
            ]}
            display={['flex', 'flex', 'none', 'none']}
            paddingX="spacings.lg"
          />
        )}
        {closable && <MatchesDetailsCloseHeader matchId={matchId} />}
        {match && <MatchDetailsTotal match={match} />}
      </Card>
      <Card overflow="hidden" paddingBottom="spacings.lg" marginTop="spacings.sm" marginX="spacings.sm" marginBottom="48px">
        {isLoading && <MatchDetailsTotalSkeleton />}
        <MatchesIncidentList
          matchId={matchId}
          sport={params.sport as string}
          matchIncidentsServer={matchIncidentServer}
        />
      </Card>
    </>
  )
}
