export default function TournamentsPage({ params }: { params: { sport: string; tournamentSlug: string } }) {
  return <>{params.tournamentSlug}</>
}
