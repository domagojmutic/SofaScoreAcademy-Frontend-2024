import { tournaments } from '@/api/routes'
import { Tournament } from '@/model/Backend'
import TournamentsList from '@/modules/tournaments/tournaments-list/TournamentsList'
import { Box } from '@kuma-ui/core'

export default async function Tournaments({ params }: { params: { sport: string } }) {
  const tournamentsData: Tournament[] = await (
    await fetch(tournaments(params.sport), { next: { revalidate: 86400 } })
  ).json()

  return (
    <>
      <Box>
        <TournamentsList tournaments={tournamentsData} params={params} />
      </Box>
    </>
  )
}