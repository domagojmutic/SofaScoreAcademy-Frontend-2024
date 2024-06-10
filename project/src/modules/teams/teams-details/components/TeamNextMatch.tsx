import Card from '@/components/Card'
import { Match } from '@/model/Backend'
import MatchesList from '@/modules/matches/matches-list/MatchesList'
import MatchesTournamentHeader from '@/modules/matches/matches-list/components/MatchesTournamentHeader'
import { Text } from '@kuma-ui/core'

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
        marginBottom={['spacings.md', 'spacings.md', 0, 0]}
      >
        Next Match
      </Text>
      <Card bg={['colors.surface.s2', 'colors.surface.s2', 'transparent', 'transparent']} boxShadow="none">
        <MatchesTournamentHeader tournament={match.tournament} />
        <MatchesList matches={[match]} details="time" clickable={false} />
      </Card>
    </>
  )
}
