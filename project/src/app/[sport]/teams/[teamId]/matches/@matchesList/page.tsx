import MatchesTournamentList from '@/modules/matches/MatchesPageSpanList'
import MatchesTournamentListLogic from '@/modules/matches/MatchesPageSpanListLogic'
import MatchesTournamentListMobile from '@/modules/matches/MatchesPageSpanListMobile'
import { Box } from '@kuma-ui/core'

export default async function MatchesPage({ params }: { params: { sport: string } }) {
  return (
    <>
      <Box display={['none', 'none', 'block', 'block']}>
        <MatchesTournamentListLogic listType="teams">
          {/* @ts-ignore */}
          <MatchesTournamentList />
        </MatchesTournamentListLogic>
      </Box>
      <Box display={['block', 'block', 'none', 'none']}>
        <MatchesTournamentListLogic listType="teams">
          {/* @ts-ignore */}
          <MatchesTournamentListMobile />
        </MatchesTournamentListLogic>
      </Box>
    </>
  )
}
