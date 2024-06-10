import { tournament } from '@/api/routes'
import { Tournament } from '@/model/Backend'
import TournamentDetailsHeader from '@/modules/tournaments/tournaments-header/TournamentDetailsHeader'
import { Box, Spacer } from '@kuma-ui/core'

export default async function TournamentsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { sport: string; tournamentId: string }
}) {
  const tournamentData: Tournament = await (await fetch(tournament(params.tournamentId))).json()
  return (
    <>
      <Box gridColumn="span 2">
        <TournamentDetailsHeader tournament={tournamentData} />
        <Spacer display={['none', 'none', 'block', 'block']} size="spacings.md" />
        {children}
      </Box>
    </>
  )
}
