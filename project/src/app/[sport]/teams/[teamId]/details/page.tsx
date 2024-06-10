import { team, teamEvents, teamPlayers, teamTournaments } from '@/api/routes'
import { Match, Player, Team, Tournament } from '@/model/Backend'
import TeamDetails from '@/modules/teams/teams-details/TeamsDetails'
import TeamDetailsMobile from '@/modules/teams/teams-details/TeamsDetailsMobile'
import { Box } from '@kuma-ui/core'

export default async function TeamDetailsPage({ params }: { params: { sport: string; teamId: string } }) {
  const teamData: Team = await (await fetch(team(params.teamId), { next: { revalidate: 86400 } })).json()
  const teamPlayersData: Player[] = await (
    await fetch(teamPlayers(params.teamId), { next: { revalidate: 86400 } })
  ).json()
  const teamTournamentsData: Tournament[] = await (
    await fetch(teamTournaments(params.teamId), { next: { revalidate: 86400 } })
  ).json()
  const teamNextMatches: Match[] = await (
    await fetch(teamEvents(params.teamId, 'next', 0), { next: { revalidate: 3600 } })
  ).json()

  return (
    <>
      <Box display={['none', 'none', 'block', 'block']}>
        <TeamDetails
          team={teamData}
          players={teamPlayersData}
          tournaments={teamTournamentsData}
          nextMatch={teamNextMatches[0]}
        />
      </Box>
      <Box display={['block', 'block', 'none', 'none']}>
        <TeamDetailsMobile
          team={teamData}
          players={teamPlayersData}
          tournaments={teamTournamentsData}
          nextMatch={teamNextMatches[0]}
        />
      </Box>
    </>
  )
}