'use client'

import { Box, Flex, css } from '@kuma-ui/core'
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
import TournamentStandingsPicker from './components/TournamentStandingsPicker'

interface TournamentStandingsProps {
  tournamentStandingsServer?: Standings[]
  forceTournamentId?: string | number
  allowTournamentChanging?: boolean
}

export default function TournamentStandings({
  tournamentStandingsServer,
  forceTournamentId,
  allowTournamentChanging = false,
}: TournamentStandingsProps) {
  const params = useParams()
  const fields = standingsFields[params.sport as string]
  const [tournamentStandingsTotal, setTournamentStandingsTotal] = useState<Standings | undefined>(
    tournamentStandingsServer?.find(standings => standings.type === 'total')
  )
  const [tournamentLocalId, setTournamentLocalId] = useState(forceTournamentId || (params.tournamentId as string))

  const {
    data: tournamentStandingsAll,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<Standings[]>(tournamentStandings(tournamentLocalId), {
    fallbackData: tournamentStandingsServer,
  })

  useEffect(() => {
    mutate()
  }, [tournamentLocalId])

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
        {allowTournamentChanging && (
          <Box
            paddingX="spacings.sm"
            paddingTop="spacings.sm"
            paddingBottom={['spacings.sm', 'spacings.sm', 0, 0]}
            bg={['colors.surface.s2', 'colors.surface.s2', 'colors.surface.s1', 'colors.surface.s1']}
          >
            <Card
              display="flex"
              alignItems="center"
              padding="spacings.sm"
              bg={['colors.surface.s1', 'colors.surface.s1', 'colors.surface.s2', 'colors.surface.s2']}
              borderRadius={['16px', '16px', '8px', '8px']}
              height={['48px', '48px', '56px', '56px']}
              boxShadow="none"
            >
              <TournamentStandingsPicker selectedTournamentId={tournamentLocalId} />
            </Card>
          </Box>
        )}

        <Box
          as="table"
          width="100%"
          borderStyle="none"
          className={css`
            border-collapse: collapse;
          `}
        >
          <TournamentStandingsHeader fields={fields} />
          <tbody>
            {tournamentStandingsTotal &&
              tournamentStandingsTotal.sortedStandingsRows.map((row, i) => {
                return (
                  <TournamentStandingsRow
                    fields={fields}
                    standingsRow={row}
                    index={i + 1}
                    selected={`${row.team.id}` === params.teamId}
                    key={row.id}
                  />
                )
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
