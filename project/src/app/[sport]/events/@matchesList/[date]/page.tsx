import { events } from '@/api/routes'
import { Match } from '@/model/Backend'
import MatchesCalendarList from '@/modules/matches/MatchesCalendarList'
import { Box } from '@kuma-ui/core'

export default async function MatchesPage({ params }: { params: { sport: string; date: string } }) {
  const localDate = params.date ? new Date(params.date) : new Date()
  const matches: Match[] = await (await fetch(events(params.sport, localDate), { cache: 'no-cache' })).json()
  return (
    <>
      <Box>
        <MatchesCalendarList date={localDate} sport={params.sport} matchesServer={matches} />
      </Box>
    </>
  )
}
