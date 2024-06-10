'use client'
import { Match } from '@/model/Backend'
import Card from '@/components/Card'
import MatchesList from './matches-list/MatchesList'
import { Fragment } from 'react'
import { Box, Flex, Text } from '@kuma-ui/core'
import LoadingSpinner from '@/components/LoadingSpinner'
import MatchesPagesHeader from './matches-list/components/MatchesPagesHeader'

interface MatchListProps {
  nextPage: () => void
  prevPage: () => void
  isLoading: boolean
  isValidating: boolean
  matches: Match[]
  matchesByRounds: { round: number; matches: Match[] }[]
}

export default function MatchesCalendarList({
  nextPage,
  prevPage,
  isLoading,
  isValidating,
  matches,
  matchesByRounds,
}: MatchListProps) {
  return (
    <>
      <Card overflow="hidden" paddingTop="spacings.md" paddingBottom="spacings.lg" position="relative">
        <MatchesPagesHeader nextPage={nextPage} prevPage={prevPage} />
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

        {!isLoading &&
          matchesByRounds &&
          matchesByRounds.map(({ round, matches }, index) => {
            return (
              <Fragment key={round}>
                <Box paddingX="spacings.lg" paddingY="spacings.sm" paddingTop={index !== 0 ? 'spacings.xxl' : ''}>
                  <Text
                    fontSize="fontSizes.xs"
                    fontWeight="bold"
                    lineHeight="16px"
                    color="colors.onSurface.nLv1"
                    textAlign="left"
                  >
                    Round {round}
                  </Text>
                </Box>
                <MatchesList matches={matches} details="time" />
              </Fragment>
            )
          })}

        {(isLoading || (matches && matches.length > 0 && matchesByRounds.length <= 0)) && (
          <>
            <Box marginX="spacings.lg" marginY="spacings.sm" width="3em" height="14px" bg="colors.onSurface.nLv4" />
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
