import { tournament } from '@/api/routes'
import TournamentDetailsHeader from '@/modules/tournaments/tournaments-details/tournaments-header/TournamentDetailsHeader'
import { Box, Spacer } from '@kuma-ui/core'

export default async function TournamentsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { sport: string; tournamentId: string }
}) {
  const tournamentData = await (await fetch(tournament(params.tournamentId))).json()
  return (
    <>
      <Box gridColumn="span 2">
        <TournamentDetailsHeader tournament={tournamentData} />
        <Spacer size="spacings.md" />
        {children}
      </Box>
    </>
  )
}
