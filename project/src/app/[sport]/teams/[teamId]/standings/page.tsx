import { teamTournaments, tournamentStandings } from '@/api/routes'
import { Standings, Tournament } from '@/model/Backend'
import TournamentStandings from '@/modules/tournaments/tournaments-standings/TournamentStandings'

export default async function ReamStandingsPage({ params }: { params: { sport: string; teamId: string } }) {
  const teamTournamentData: Tournament[] = await (await fetch(teamTournaments(params.teamId))).json()
  const standings: Standings[] = await (
    await fetch(tournamentStandings(teamTournamentData[0].id), { next: { revalidate: 3600 } })
  ).json()

  return (
    <>
      <TournamentStandings
        tournamentStandingsServer={standings}
        forceTournamentId={teamTournamentData[0].id}
        allowTournamentChanging={true}
      />
    </>
  )
}
