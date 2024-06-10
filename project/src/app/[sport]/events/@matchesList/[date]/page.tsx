import { events } from '@/api/routes'
import { Match } from '@/model/Backend'
import MatchesCalendarList from '@/modules/matches/MatchesCalendarList'
import MatchesCalendarListLogic from '@/modules/matches/MatchesCalendarListLogic'
import MatchesCalendarListMobile from '@/modules/matches/MatchesCalendarListMobile'
import { Box } from '@kuma-ui/core'

export default async function MatchesPage({ params }: { params: { sport: string; date: string } }) {
  const localDate = params.date ? new Date(params.date) : new Date()
  const matches: Match[] = await (await fetch(events(params.sport, localDate), { cache: 'no-cache' })).json()
  return (
    <>
      <Box display={['none', 'none', 'block', 'block']}>
        <MatchesCalendarListLogic date={localDate} sport={params.sport} matchesServer={matches}>
          {/* @ts-ignore */}
          <MatchesCalendarList />
        </MatchesCalendarListLogic>
      </Box>
      <Box display={['block', 'block', 'none', 'none']}>
        <MatchesCalendarListLogic date={localDate} sport={params.sport} matchesServer={matches}>
          {/* @ts-ignore */}
          <MatchesCalendarListMobile />
        </MatchesCalendarListLogic>
      </Box>
    </>
  )
}
