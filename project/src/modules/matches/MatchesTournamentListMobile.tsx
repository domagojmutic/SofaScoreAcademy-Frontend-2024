'use client'
import { Match } from '@/model/Backend'
import Card from '@/components/Card'
import MatchesList from './matches-list/MatchesList'
import { Fragment } from 'react'
import { Box, Flex, Spacer, Text } from '@kuma-ui/core'
import LoadingSpinner from '@/components/LoadingSpinner'
import MatchesPagesHeader from './matches-list/components/MatchesPagesHeader'

interface MatchListMobileProps {
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
}: MatchListMobileProps) {
  return (
    <>
      <Box marginTop="spacings.lg">
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

        <MatchesPagesHeader nextPage={nextPage} prevPage={prevPage} />
        {!isLoading &&
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
                <Card marginX="spacings.sm">
                  <MatchesList matches={matches} details="time" />
                </Card>
              </Fragment>
            )
          })}

        {(isLoading || (matches && matches.length > 0 && matchesByRounds.length <= 0)) && (
          <>
            <Box marginX="spacings.lg" marginY="spacings.sm" width="3em" height="14px" bg="black" opacity="0.25" />
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
        <Spacer size="16px" />
        <MatchesPagesHeader nextPage={nextPage} prevPage={prevPage} />
      </Box>
    </>
  )
}
