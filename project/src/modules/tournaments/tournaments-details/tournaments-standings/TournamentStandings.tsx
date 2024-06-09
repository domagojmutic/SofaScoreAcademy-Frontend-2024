'use client'

import { Box, Flex } from '@kuma-ui/core'
import { Standings } from '@/model/Backend'
import Card from '@/components/Card'
import TournamentStandingsHeader from './components/TournamentStandingsHeader'
import TournamentStandingsRow from './components/TournamentStandingsRow'
import { tournamentStandings } from '@/api/routes'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useEffect, useState } from 'react'
import TournamentStandingsRowSkeleton from './components/TournamentStandingsRowSkeleton'

interface TournamentStandingsProps {
  tournamentStandingsServer?: Standings[]
}

export default function TournamentStandings({ tournamentStandingsServer }: TournamentStandingsProps) {
  const params = useParams()
  const fields = standingsFields[params.sport as string]
  const [tournamentStandingsTotal, setTournamentStandingsTotal] = useState<Standings | undefined>(
    tournamentStandingsServer?.find(standings => standings.type === 'total')
  )
  const {
    data: tournamentStandingsAll,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<Standings[]>(tournamentStandings(params.tournamentId as string), {
    fallbackData: tournamentStandingsServer,
  })

  useEffect(() => {
    if (tournamentStandingsAll)
      setTournamentStandingsTotal(tournamentStandingsAll.find(standings => standings.type === 'total'))
  }, [tournamentStandingsAll])

  return (
    <>
      <Card paddingBottom="spacings.lg" position="relative" borderRadius={[0, 0, 16, 16]}>
        {((tournamentStandingsServer && isLoading) || isValidating) && (
          <Flex position="absolute" width="100%" height="48px" justifyContent="center" alignItems="center">
            <LoadingSpinner size="24px" />
          </Flex>
        )}
        <Box as="table" width="100%">
          <TournamentStandingsHeader fields={fields} />
          <tbody>
            {tournamentStandingsTotal &&
              tournamentStandingsTotal.sortedStandingsRows.map((row, i) => {
                return <TournamentStandingsRow fields={fields} standingsRow={row} index={i + 1} key={row.id} />
              })}

            {!tournamentStandingsServer &&
              isLoading &&
              Array.from({ length: 8 }).map((_, i) => {
                return <TournamentStandingsRowSkeleton key={i} />
              })}
          </tbody>
        </Box>
      </Card>
    </>
  )
}

const standingsFields: {
  [key: string]: (
    | {
        name: string
        value: (obj: Standings['sortedStandingsRows'][0]) => number
      }
    | {
        name: string
        value: (obj: Standings['sortedStandingsRows'][0]) => string
      }
  )[]
} = {
  football: [
    {
      name: 'P',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.played
      },
    },
    {
      name: 'W',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.wins
      },
    },
    {
      name: 'D',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.draws
      },
    },
    {
      name: 'L',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.losses
      },
    },
    {
      name: 'Goals',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.scoresFor + ':' + obj.scoresAgainst
      },
    },
    {
      name: 'PTS',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.points
      },
    },
  ],
  basketball: [
    {
      name: 'P',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.played
      },
    },
    {
      name: 'W',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.wins
      },
    },
    {
      name: 'L',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.losses
      },
    },
    {
      name: 'DIFF',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.scoresAgainst - obj.scoresFor 
      },
    },
    {
      name: 'PCT',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.percentage.toFixed(3)
      },
    },
  ],
  'american-football': [
    {
      name: 'P',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.played
      },
    },
    {
      name: 'W',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.wins
      },
    },
    {
      name: 'D',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.draws
      },
    },
    {
      name: 'L',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.losses
      },
    },
    {
      name: 'PCT',
      value: (obj: Standings['sortedStandingsRows'][0]) => {
        return obj.percentage.toFixed(3)
      },
    },
  ],
}
