import { events } from '@/api/routes'
import { Match } from '@/model/Backend'
import MatchesCalendarList from '@/modules/matches/MatchesCalendarList'
import { Box } from '@kuma-ui/core'

export default async function MatchesPage({ params }: { params: { sport: string } }) {
  const matches: Match[] = await (await fetch(events(params.sport, new Date()), { cache: 'no-cache' })).json()

  return (
    <>
      <Box>
        <MatchesCalendarList date={new Date()} sport={params.sport} matchesServer={matches} />
      </Box>
    </>
  )
}
