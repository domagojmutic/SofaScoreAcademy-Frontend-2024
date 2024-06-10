'use client'
import { EventIncident, Match } from '@/model/Backend'
import useSWR from 'swr'
import { eventIncidents } from '@/api/routes'
import { Flex } from '@kuma-ui/core'
import CardIncident from './components/CardIncident'
import PeriodIncident from './components/PeriodIncident'
import FootballGoalIncident from './components/FootballGoalIncident'
import AmericanFootballGoalIncident from './components/AmericanFootballGoalIncident'
import BasketballGoalIncident from './components/BasketballGoalIncident'
import IncidentSkeleton from './components/IncidentSkeleton'
import MatchesNoIncidents from './MatchNoIncidents'

interface MatchesIncidentListProps {
  matchId: string
  match?: Match
  sport: string
  matchIncidentsServer?: EventIncident[]
}

export default function MatchesIncidentList({ matchId, match, sport, matchIncidentsServer }: MatchesIncidentListProps) {
  const {
    data: incidents,
    error,
    isLoading,
  } = useSWR<EventIncident[]>(eventIncidents(matchId), {
    fallbackData: matchIncidentsServer,
  })

  return (
    <>
      {((matchIncidentsServer && matchIncidentsServer.length > 0) ||
        (incidents && incidents.length > 0) ||
        isLoading) && (
        <Flex flexDirection="column-reverse">
          {incidents &&
            incidents.map(incident => {
              switch (incident.type) {
                case 'card':
                  return <CardIncident incident={incident} key={incident.id} />
                case 'period':
                  return <PeriodIncident incident={incident} key={incident.id} />
                case 'goal': {
                  switch (sport) {
                    case 'football':
                      return <FootballGoalIncident incident={incident} key={incident.id} />
                    case 'basketball':
                      return <BasketballGoalIncident incident={incident} key={incident.id} />
                    case 'american-football':
                      return <AmericanFootballGoalIncident incident={incident} key={incident.id} />
                  }
                }
              }
            })}
          {isLoading &&
            [0, 1, 2, 3, 4].map(index => {
              return <IncidentSkeleton key={index} side={index % 2 === 0 ? 'left' : 'right'} />
            })}
        </Flex>
      )}
      {!isLoading && incidents && incidents.length <= 0 && <MatchesNoIncidents tournament={match?.tournament} />}
    </>
  )
}
