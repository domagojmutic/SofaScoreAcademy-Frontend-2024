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
import Separator from '@/components/Separator'

interface MatchDetailsProps {
  matchId: string
  closable: boolean
  matchServer?: Match
  matchIncidentServer?: EventIncident[]
}

export default function MatchesDetails({ matchId, closable, matchServer, matchIncidentServer }: MatchDetailsProps) {
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
      <Card overflow="hidden" paddingBottom="spacings.lg">
        {closable && <MatchesDetailsCloseHeader matchId={matchId} />}
        {match && <MatchDetailsTotal match={match} />}
        {isLoading && <MatchDetailsTotalSkeleton />}
        <Separator direction="horizontal" color="colors.onSurface.nLv4" length="100%" thickness="1px" />
        <MatchesIncidentList
          matchId={matchId}
          match={match}
          sport={params.sport as string}
          matchIncidentsServer={matchIncidentServer}
        />
      </Card>
    </>
  )
}
