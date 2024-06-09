'use client'
import { Match } from '@/model/Backend'
import { getDateString, getTimeString } from '@/utils/dateUtils'
import { Box, Flex, Image, Text } from '@kuma-ui/core'

interface MatchDetailsTotalProps {
  match: Match
}

export default function MatchesDetailsTotal({ match }: MatchDetailsTotalProps) {
  return (
    <>
      <Flex height="112px" padding="spacings.lg" alignItems="flex-start">
        <Flex width="96px" flexDirection="column" gap="spacings.sm" alignItems="center">
          <Image src={`/api/team/${match.homeTeam.id}/image`} width="40px" height="40px" />
          <Text color="colors.onSurface.nLv1" fontSize="fontSizes.xs" fontWeight="bold" textAlign="center">
            {match.homeTeam.name}
          </Text>
        </Flex>
        {new Date(match.startDate) < new Date() && (
          <Box flexGrow="1">
            <Flex justifyContent="center" gap="4px">
              <Text
                textAlign="right"
                fontWeight="bold"
                fontSize="32px"
                lineHeight="40px"
                color={
                  match.status === 'inprogress'
                    ? 'colors.live'
                    : match.status !== 'finished' || match.winnerCode !== 'away'
                    ? 'colors.onSurface.nLv1'
                    : 'colors.onSurface.nLv2'
                }
              >
                {match.homeScore.total}
              </Text>
              <Text
                textAlign="center"
                fontWeight="bold"
                fontSize="32px"
                lineHeight="40px"
                color={match.status === 'inprogress' ? 'colors.live' : 'colors.onSurface.nLv1'}
              >
                -
              </Text>
              <Text
                textAlign="left"
                fontWeight="bold"
                fontSize="32px"
                lineHeight="40px"
                color={
                  match.status === 'inprogress'
                    ? 'colors.live'
                    : match.status !== 'finished' || match.winnerCode !== 'home'
                    ? 'colors.onSurface.nLv1'
                    : 'colors.onSurface.nLv2'
                }
              >
                {match.awayScore.total}
              </Text>
            </Flex>
            <Text textAlign="center" fontSize="fontSizes.xs" fontStretch="condensed" lineHeight="16px">
              {match.status === 'finished' ? 'FT' : match.status === 'inprogress' ? 'AC' : '-'}
            </Text>
          </Box>
        )}
        {new Date(match.startDate) >= new Date() && (
          <Box flexGrow="1" marginTop="spacings.sm">
            <Text textAlign="center" fontSize="fontSizes.xs" lineHeight="16px" color="colors.onSurface.nLv1">
              {getDateString(new Date(match.startDate), '. ', false)}.
            </Text>
            <Text
              textAlign="center"
              fontSize="fontSizes.xs"
              lineHeight="16px"
              color="colors.onSurface.nLv1"
              marginTop="4px"
            >
              {getTimeString(new Date(match.startDate))}
            </Text>
          </Box>
        )}
        <Flex width="96px" flexDirection="column" gap="spacings.sm" alignItems="center">
          <Image src={`/api/team/${match.awayTeam.id}/image`} width="40px" height="40px" />
          <Text color="colors.onSurface.nLv1" fontSize="fontSizes.xs" fontWeight="bold" textAlign="center">
            {match.awayTeam.name}
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
