import { team } from '@/api/routes'
import { Team } from '@/model/Backend'
import TeamDetailsHeader from '@/modules/teams/teams-header/TeamsHeader'
import { Box, Spacer } from '@kuma-ui/core'

export default async function TeamsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { sport: string; teamId: string }
}) {
  const teamData: Team = await (await fetch(team(params.teamId))).json()
  return (
    <>
      <Box gridColumn="span 2">
        <TeamDetailsHeader team={teamData} />
        <Spacer display={["none", "none", "block", "block"]} size="spacings.md" />
        {children}
      </Box>
    </>
  )
}
