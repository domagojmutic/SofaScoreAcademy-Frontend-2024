import { tournament } from '@/api/routes'
import DonutChart from '@/components/DonutChart'
import Separator from '@/components/Separator'
import { Match, Player, Team } from '@/model/Backend'
import MatchesList from '@/modules/matches/matches-list/MatchesList'
import MatchesTournamentHeader from '@/modules/matches/matches-list/components/MatchesTournamentHeader'
import { Box, Flex, Image, Text } from '@kuma-ui/core'

interface TeamNextMatchProps {
  match: Match
}

export default function TeamNextMatch({ match }: TeamNextMatchProps) {
  return (
    <>
      <Text
        as="h2"
        paddingX="spacings.lg"
        fontSize="fontSizes.md"
        fontWeight="fontWeights.bold"
        lineHeight="20px"
        color="colors.onSurface.nLv1"
        textAlign="center"
      >
        Next Match
      </Text>
      <MatchesTournamentHeader tournament={match.tournament} />
      <MatchesList matches={[match]} details="time" clickable={false} />
    </>
  )
}
