'use client'
import { Match, Tournament } from '@/model/Backend'
import Card from '@/components/Card'
import MatchesTimeHeader from './matches-list/components/matches-time-header/MatchesTimeHeader'
import MatchesList from './matches-list/MatchesList'
import { Fragment } from 'react'
import MatchesTournamentHeader from './matches-list/components/MatchesTournamentHeader'
import Separator from '@/components/Separator'
import MatchesTournamentHeaderSkeleton from './matches-list/components/MatchesTournamentHeaderSkeleton'
import { Box, Flex, Text } from '@kuma-ui/core'
import LoadingSpinner from '@/components/LoadingSpinner'

interface MatchListProps {
  nextDate: () => void
  prevDate: () => void
  isLoading: boolean
  isValidating: boolean
  matches: Match[]
  matchesByLeague: { tournament: Tournament; matches: Match[] }[]
  date: Date
  localDate: Date
}

export default function MatchesCalendarList({
  nextDate,
  prevDate,
  isLoading,
  isValidating,
  matches,
  matchesByLeague,
  date,
  localDate,
}: MatchListProps) {
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
          matchesByLeague &&
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
