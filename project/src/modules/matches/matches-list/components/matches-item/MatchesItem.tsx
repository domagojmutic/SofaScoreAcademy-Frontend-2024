import { Box, Text, Flex } from '@kuma-ui/core'
import { Match } from '@/model/Backend'
import Link from 'next/link'
import MatchesTeam from './components/MatchesTeam'
import Separator from '@/components/Separator'

interface MatchesListItemProps {
  match: Match
  selected: boolean
}

export default function MatchesListItem({ match, selected }: MatchesListItemProps) {
  return (
    <Flex
      as={Link}
      href={'?event=' + match.id}
      paddingY="spacings.sm"
      display="flex"
      alignItems="center"
      height="56px"
      _hover={{ bg: 'rgba(0,0,0,0.1)' }}
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
            {new Date(match.startDate).toLocaleTimeString(undefined, {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>
        </Box>
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