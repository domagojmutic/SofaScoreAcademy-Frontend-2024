import { tournament } from '@/api/routes'
import TournamentDetailsHeader from '@/modules/tournaments/tournaments-header/TournamentDetailsHeader'
import { Box, Grid, Spacer } from '@kuma-ui/core'

export default async function TournamentsLayout({
  matchesList,
  matchDetails,
  params,
}: {
  matchesList: React.ReactNode
  matchDetails: React.ReactNode
  params: { sport: string; tournamentId: string }
}) {
  const tournamentData = await (await fetch(tournament(params.tournamentId))).json()
  return (
    <>
      <Grid gridTemplateColumns={['1fr', '1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} gap="spacings.xxl">
        <Box>{matchesList}</Box>
        <Box>{matchDetails}</Box>
      </Grid>
    </>
  )
}
