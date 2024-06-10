import { player } from '@/api/routes'
import { Player } from '@/model/Backend'
import PlayersHeader from '@/modules/players/players-header/PlayersHeader'
import PlayersHeaderMobile from '@/modules/players/players-header/PlayersHeaderMobile'
import { Box, Spacer } from '@kuma-ui/core'

export default async function PlayersLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { sport: string; playerId: string }
}) {
  const playerData: Player = await (await fetch(player(params.playerId))).json()
  return (
    <>
      <Box gridColumn="span 2">
        <Box display={['none', 'none', 'block', 'block']}>
          <PlayersHeader player={playerData} />
        </Box>
        <Box display={['inline', 'inline', 'none', 'none']}>
          <PlayersHeaderMobile player={playerData} />
        </Box>
        <Spacer display={['none', 'none', 'block', 'block']} size="spacings.md" />
        {children}
      </Box>
    </>
  )
}
