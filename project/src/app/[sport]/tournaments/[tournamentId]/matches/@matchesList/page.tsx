import { events } from '@/api/routes'
import { Match } from '@/model/Backend'
import MatchesTournamentList from '@/modules/matches/MatchesTournamentList'
import { Box } from '@kuma-ui/core'

export default async function MatchesPage({ params }: { params: { sport: string } }) {
  const matches: Match[] = await (await fetch(events(params.sport, new Date()), { cache: 'no-cache' })).json()

  return (
    <>
      <Box>
        <MatchesTournamentList />
      </Box>
    </>
  )
}
