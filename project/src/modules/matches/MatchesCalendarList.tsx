'use client'
import { Match, Tournament } from '@/model/Backend'
import useSWR from 'swr'
import Card from '@/components/Card'
import MatchesTimeHeader from './matches-list/components/matches-time-header/MatchesTimeHeader'
import MatchesList from './matches-list/MatchesList'
import { Fragment, useEffect, useState } from 'react'
import MatchesTournamentHeader from './matches-list/components/MatchesTournamentHeader'
import Separator from '@/components/Separator'
import { events } from '@/api/routes'
import MatchesTournamentHeaderSkeleton from './matches-list/components/MatchesTournamentHeaderSkeleton'
import { addToDate, isSameDay } from '@/utils/dateUtils'
import { Box, Flex, Text } from '@kuma-ui/core'
import LoadingSpinner from '@/components/LoadingSpinner'

interface MatchListProps {
  sport: string
  date: Date
  matchesServer?: Match[]
}

export default function MatchesCalendarList({ sport, date, matchesServer }: MatchListProps) {
  const [matchesByLeague, setMatchesByLeague] = useState<{ tournament: Tournament; matches: Match[] }[]>([])
  const [localDate, setLocalDate] = useState<Date>(new Date(date))

  const nextDate = () => {
    setLocalDate(addToDate(localDate, { days: 1 }))
  }
  const prevDate = () => {
    setLocalDate(addToDate(localDate, { days: -1 }))
  }

  const {
    data: matches,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<Match[]>(events(sport, localDate), {
    fallbackData: isSameDay(localDate, date) ? matchesServer : undefined,
    suspense: true,
  })

  useEffect(() => {
    mutate()
  }, [localDate])

  useEffect(() => {
    const tournamentIds: number[] = []
    const tournaments: { tournament: Tournament; matches: Match[] }[] = []
    matches?.forEach(match => {
      if (tournamentIds.includes(match.tournament.id)) {
        const obj = tournaments.find(tournament => tournament.tournament.id === match.tournament.id)
        obj?.matches.push(match)
      } else {
        tournamentIds.push(match.tournament.id)
        tournaments.push({ tournament: match.tournament, matches: [match] })
      }
    })
    setMatchesByLeague(tournaments)
  }, [matches])

  return (
    <>
      <Card overflow="hidden" paddingBottom="spacings.lg" position="relative">
        <MatchesTimeHeader date={date} nextDate={nextDate} prevDate={prevDate} />
        {!isLoading && isValidating && (
          <>
            <Box position="absolute" left="50%" transform="translateX(-50%)" paddingTop="spacings.sm">
              <LoadingSpinner size="40px" />
            </Box>
            {(!matches || matches!.length <= 0) && (
              <Box paddingTop="spacings.md">
                <Text color="colors.onSurface.nLv1" fontWeight="bold">
                  &nbsp;
                </Text>
              </Box>
            )}
          </>
        )}
        {matches && matches.length > 0 && (
          <Box height="48px" paddingX="spacings.lg" paddingBottom="spacings.sm" paddingTop="spacings.xxl">
            <Flex justifyContent="space-between">
              <Text
                fontSize="fontSizes.xs"
                fontWeight="bold"
                lineHeight="16px"
                color="colors.onSurface.nLv1"
                textAlign="left"
              >
                {localDate.toLocaleDateString('en', { weekday: 'long' })}
              </Text>
              <Text
                fontSize="fontSizes.xs"
                fontWeight="bold"
                lineHeight="16px"
                color="colors.onSurface.nLv2"
                textAlign="right"
              >
                {matches.length} {matches.length > 1 ? 'Events' : 'Event'}
              </Text>
            </Flex>
          </Box>
        )}
        {!isLoading &&
          matchesByLeague.map(({ tournament, matches }, index) => {
            return (
              <Fragment key={tournament.id}>
                <MatchesTournamentHeader tournament={tournament} />
                <MatchesList matches={matches} />
                {index !== matchesByLeague.length - 1 && (
                  <Separator
                    direction="horizontal"
                    length="100%"
                    color="colors.onSurface.nLv4"
                    thickness="1px"
                    marginTop="7px"
                  />
                )}
              </Fragment>
            )
          })}

        {(isLoading || (matches && matches.length > 0 && matchesByLeague.length <= 0)) && (
          <>
            <MatchesTournamentHeaderSkeleton />
            <MatchesList />
          </>
        )}

        {!isLoading && !isValidating && matches && matches.length <= 0 && (
          <Flex justify="center" alignItems="center" paddingTop="spacings.md">
            <Text color="colors.onSurface.nLv1" fontWeight="bold">
              No Events
            </Text>
          </Flex>
        )}
      </Card>
    </>
  )
}
