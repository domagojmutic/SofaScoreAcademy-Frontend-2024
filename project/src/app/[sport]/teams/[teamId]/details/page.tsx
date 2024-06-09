import { team, teamEvents, teamPlayers, teamTournaments } from '@/api/routes'
import { Match, Player, Team, Tournament } from '@/model/Backend'
import TeamDetails from '@/modules/teams/teams-details/TeamsDetails'

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
      <TeamDetails team={teamData} players={teamPlayersData} tournaments={teamTournamentsData} nextMatch={teamNextMatches[0]} />
    </>
  )
}
