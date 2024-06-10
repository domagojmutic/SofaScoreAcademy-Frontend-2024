import { events } from '@/api/routes'
import { Match } from '@/model/Backend'
import MatchesCalendarList from '@/modules/matches/MatchesCalendarList'
import MatchesCalendarListLogic from '@/modules/matches/MatchesCalendarListLogic'
import MatchesCalendarListMobile from '@/modules/matches/MatchesCalendarListMobile'
import { Box } from '@kuma-ui/core'

export default async function MatchesPage({ params }: { params: { sport: string } }) {
  const matches: Match[] = await (await fetch(events(params.sport, new Date()), { cache: 'no-cache' })).json()

  return (
    <>
      <Box display={['none', 'none', 'block', 'block']}>
        <MatchesCalendarListLogic date={new Date()} sport={params.sport} matchesServer={matches}>
          {/* @ts-ignore */}
          <MatchesCalendarList />
        </MatchesCalendarListLogic>
      </Box>
      <Box display={['block', 'block', 'none', 'none']}>
        <MatchesCalendarListLogic date={new Date()} sport={params.sport} matchesServer={matches}>
          {/* @ts-ignore */}
          <MatchesCalendarListMobile />
        </MatchesCalendarListLogic>
      </Box>
    </>
  )
}
