import { Box, Text, Flex } from '@kuma-ui/core'
import { Match } from '@/model/Backend'
import Link from 'next/link'
import MatchesTeam from './components/MatchesTeam'
import Separator from '@/components/Separator'
import theme from '../../../../../../kuma.config'
import { useScreenContext } from '@/context/ScreenContext'
import { getDateString, getTimeString } from '@/utils/dateUtils'

interface MatchesListItemProps {
  match: Match
  selected: boolean
  details?: 'status' | 'time'
  clickable?: boolean
}

export default function MatchesListItem({
  match,
  selected,
  details = 'status',
  clickable = true,
}: MatchesListItemProps) {
  const screen = useScreenContext()
  return (
    <Flex
      as={Link}
      href={
        clickable
          ? screen.screenWidth >= parseInt(theme.breakpoints['breakpoints.md'])
            ? '?event=' + match.id
            : '/' + match.tournament.sport.slug + '/event/' + match.id
          : '#'
      }
      paddingY="spacings.sm"
      display="flex"
      alignItems="center"
      height="56px"
      _hover={{ bg: 'colors.surface.s2' }}
      scroll={false}
      bg={selected ? 'colors.primaryHighlight' : 'none'}
    >
      <Box width="64px" paddingX="4px" paddingY="10px">
        <Box>
          <Text
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.xs"
            lineHeight="16px"
            textAlign="center"
            fontStretch="condensed"
          >
            {getTimeString(new Date(match.startDate))}
          </Text>
        </Box>
        {details === 'status' && (
          <Box marginTop="4px">
            <Text
              color={match.status === 'inprogress' ? 'colors.live' : 'colors.onSurface.nLv2'}
              fontSize="fontSizes.xs"
              lineHeight="16px"
              textAlign="center"
              fontStretch="condensed"
            >
              {match.status === 'finished' ? 'FT' : match.status === 'inprogress' ? 'AC' : '-'}
            </Text>
          </Box>
        )}
        {details === 'time' && (
          <Box marginTop="4px">
            <Text
              color={match.status === 'inprogress' ? 'colors.live' : 'colors.onSurface.nLv2'}
              fontSize="fontSizes.xs"
              lineHeight="16px"
              textAlign="center"
              fontStretch="condensed"
            >
              {getDateString(new Date(match.startDate), '. ', false, { year: false, month: true, day: true })}
            </Text>
          </Box>
        )}
      </Box>
      <Separator direction="vertical" thickness="1px" length="40px" color="colors.onSurface.nLv4" />
      <Box flexGrow="1" paddingX="16px" paddingY="10px">
        <MatchesTeam team={match.homeTeam} winner={match.status !== 'finished' || match.winnerCode !== 'away'} />
        <MatchesTeam
          team={match.awayTeam}
          winner={match.status !== 'finished' || match.winnerCode !== 'home'}
          marginTop="4px"
        />
      </Box>
      <Box width="32px" paddingRight="16px" paddingY="10px">
        <Box>
          <Text
            color={
              match.status === 'inprogress'
                ? 'colors.live'
                : match.status !== 'finished' || match.winnerCode !== 'away'
                ? 'colors.onSurface.nLv1'
                : 'colors.onSurface.nLv2'
            }
            fontSize="fontSizes.xs"
            lineHeight="16px"
            textAlign="right"
          >
            {match.homeScore.total}
          </Text>
        </Box>
        <Box marginTop="4px">
          <Text
            color={
              match.status === 'inprogress'
                ? 'colors.live'
                : match.winnerCode !== 'home'
                ? 'colors.onSurface.nLv1'
                : 'colors.onSurface.nLv2'
            }
            fontSize="fontSizes.xs"
            lineHeight="16px"
            textAlign="right"
          >
            {match.awayScore.total}
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}
