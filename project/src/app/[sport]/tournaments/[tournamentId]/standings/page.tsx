import { tournamentStandings } from '@/api/routes'
import { Standings } from '@/model/Backend'
import TournamentStandings from '@/modules/tournaments/tournaments-standings/TournamentStandings'

export default async function TournamentStandingsPage({ params }: { params: { sport: string; tournamentId: string } }) {
  const standings: Standings[] = await (
    await fetch(tournamentStandings(params.tournamentId), { next: { revalidate: 3600 } })
  ).json()

  return (
    <>
      <TournamentStandings tournamentStandingsServer={standings} />
    </>
  )
}
