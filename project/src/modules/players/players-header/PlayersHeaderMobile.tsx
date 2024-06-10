import { Player } from '@/model/Backend'
import Card from '@/components/Card'
import Breadcrumbs from '@/components/Breadcrumbs'
import { toTitleCase } from '@/utils/stringUtils'
import PlayersTop from './components/PlayersTop'
import PlayersDetails from './components/PlayersDetails'
import { Box } from '@kuma-ui/core'

interface PlayersHeaderProps {
  player: Player
}

export default function PlayersHeader({ player }: PlayersHeaderProps) {
  return (
    <>
      <Card
        borderRadius={[0, 0, 16, 16]}
        zIndex="2"
        position={['sticky', 'sticky', 'relative', 'relative']}
        top={['48px', '48px', 0, 0]}
        paddingX="spacings.lg"
        paddingBottom="spacings.xxl"
      >
        <Breadcrumbs
          display={['flex', 'flex', 'none', 'none']}
          items={[player.sport.name, player.name]}
          paddingX={'spacings.lg'}
        />
        <PlayersTop player={player} />
      </Card>
      <Card
        borderRadius={[0, 0, 16, 16]}
        paddingX="spacings.lg"
        paddingBottom="spacings.xxl"
      >
        <PlayersDetails player={player} />
      </Card>
    </>
  )
}
