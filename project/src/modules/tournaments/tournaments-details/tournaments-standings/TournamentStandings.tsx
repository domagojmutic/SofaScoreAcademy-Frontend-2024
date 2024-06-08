'use client'

import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Standings, Tournament } from '@/model/Backend'
import Card from '@/components/Card'
import iso3311a2 from 'iso-3166-1-alpha-2'
import Separator from '@/components/Separator'
import Link from 'next/link'
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
          <TournamentStandingsHeader />
          <tbody>
            {tournamentStandingsTotal &&
              tournamentStandingsTotal.sortedStandingsRows.map((row, i) => {
                return <TournamentStandingsRow standingsRow={row} index={i + 1} key={row.id} />
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
