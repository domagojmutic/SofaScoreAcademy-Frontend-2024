import { events } from '@/api/routes'
import { Match } from '@/model/Backend'
import MatchesTournamentList from '@/modules/matches/MatchesTournamentList'
import MatchesTournamentListLogic from '@/modules/matches/MatchesTournamentListLogic'
import MatchesTournamentListMobile from '@/modules/matches/MatchesTournamentListMobile'
import { Box } from '@kuma-ui/core'

export default async function MatchesPage({ params }: { params: { sport: string } }) {
  const matches: Match[] = await (await fetch(events(params.sport, new Date()), { cache: 'no-cache' })).json()

  return (
    <>
      <Box display={['none', 'none', 'block', 'block']}>
        <MatchesTournamentListLogic>
          {/* @ts-ignore */}
          <MatchesTournamentList />
        </MatchesTournamentListLogic>
      </Box>
      <Box display={['block', 'block', 'none', 'none']}>
        <MatchesTournamentListLogic>
          {/* @ts-ignore */}
          <MatchesTournamentListMobile />
        </MatchesTournamentListLogic>
      </Box>
    </>
  )
}
