import { tournament } from '@/api/routes'
import { Box, Grid } from '@kuma-ui/core'

export default async function TeamsLayout({
  matchesList,
  matchDetails,
}: {
  matchesList: React.ReactNode
  matchDetails: React.ReactNode
  params: { sport: string; tournamentId: string }
}) {
  return (
    <>
      <Grid gridTemplateColumns={['1fr', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']} gap="spacings.xxl">
        <Box>{matchesList}</Box>
        <Box>{matchDetails}</Box>
      </Grid>
    </>
  )
}
