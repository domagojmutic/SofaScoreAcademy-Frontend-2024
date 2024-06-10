import { Match, Player, Team, Tournament } from '@/model/Backend'
import TeamInfo from './components/TeamInfo'
import Card from '@/components/Card'
import { Box, Flex, Grid } from '@kuma-ui/core'
import TeamTournaments from './components/TeamTournaments'
import TeamVenue from './components/TeamVenue'
import TeamNextMatch from './components/TeamNextMatch'
import Separator from '@/components/Separator'

interface TeamDetailsProps {
  team: Team
  players: Player[]
  tournaments: Tournament[]
  nextMatch: Match
}

export default function TeamDetailsMobile({ team, players, tournaments, nextMatch }: TeamDetailsProps) {
  return (
    <>
      <Card paddingTop="spacings.lg" paddingBottom="48px" borderRadius={0}>
        <Flex flexDirection="column" gap="spacings.md">
          <TeamInfo team={team} players={players} />
          <Separator
            color="colors.onSurface.nLv4"
            direction="horizontal"
            length="100%"
            thickness="1px"
            marginTop="7px"
          />
          <TeamTournaments tournaments={tournaments} />
          <Separator
            color="colors.onSurface.nLv4"
            direction="horizontal"
            length="100%"
            thickness="1px"
            marginTop="7px"
          />
          <TeamVenue team={team} />
          <Separator
            color="colors.onSurface.nLv4"
            direction="horizontal"
            length="100%"
            thickness="1px"
            marginTop="7px"
          />
          <Box marginX="8px">
            <TeamNextMatch match={nextMatch} />
          </Box>
        </Flex>
      </Card>
    </>
  )
}
