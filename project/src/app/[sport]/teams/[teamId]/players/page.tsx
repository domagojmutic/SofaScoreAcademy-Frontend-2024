import { team, teamEvents, teamPlayers, teamTournaments } from '@/api/routes'
import { Match, Player, Team, Tournament } from '@/model/Backend'
import TeamPlayerList from '@/modules/teams/team-players/TeamPlayerList'
import TeamDetails from '@/modules/teams/teams-details/TeamsDetails'

export default async function TeamDetailsPage({ params }: { params: { sport: string; teamId: string } }) {
  const teamPlayersData: Player[] = await (
    await fetch(teamPlayers(params.teamId), { next: { revalidate: 86400 } })
  ).json()

  return (
    <>
      <TeamPlayerList players={teamPlayersData} sport={params.sport} />
    </>
  )
}
