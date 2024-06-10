import { Match, Player, Team, Tournament } from '@/model/Backend'
import TeamInfo from './components/TeamInfo'
import Card from '@/components/Card'
import { Flex, Grid } from '@kuma-ui/core'
import TeamTournaments from './components/TeamTournaments'
import TeamVenue from './components/TeamVenue'
import TeamNextMatch from './components/TeamNextMatch'

interface TeamDetailsProps {
  team: Team
  players: Player[]
  tournaments: Tournament[]
  nextMatch: Match
}

export default function TeamDetails({ team, players, tournaments, nextMatch }: TeamDetailsProps) {
  return (
    <>
      <Grid gridTemplateColumns="repeat(2, 1fr)" gap="spacings.xxl">
        <Flex flexDirection="column" gap="spacings.md">
          <Card paddingY="spacings.lg">
            <TeamInfo team={team} players={players} />
          </Card>
          <Card paddingY="spacings.lg">
            <TeamVenue team={team} />
          </Card>
        </Flex>
        <Flex flexDirection="column" gap="spacings.md">
          <Card paddingY="spacings.lg">
            <TeamTournaments tournaments={tournaments} />
          </Card>
          <Card paddingY="spacings.lg">
            <TeamNextMatch match={nextMatch} />
          </Card>
        </Flex>
      </Grid>
    </>
  )
}
