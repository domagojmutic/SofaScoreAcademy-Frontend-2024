import { Player } from '@/model/Backend'
import Card from '@/components/Card'
import TeamPlayerListItem from './components/TeamPlayerListItem'
import { Box, Text } from '@kuma-ui/core'
import { Fragment } from 'react'
import Separator from '@/components/Separator'

interface TeamPlayerListProps {
  players: Player[]
  sport: string
}

export default function TeamPlayerList({ players, sport }: TeamPlayerListProps) {
  return (
    <>
      <Card paddingBottom="spacings.lg" borderRadius={[0, 0, 16, 16]}>
        <Box height="48px" paddingTop="spacings.xxl" paddingBottom="spacings.sm" paddingLeft="spacings.lg">
          <Text color="colors.onSurface.nLv1" fontWeight="fontWeights.bold" fontSize="fontSizes.xs" lineHeight="16px">
            Players
          </Text>
        </Box>
        {players.map((player, index) => {
          return (
            <Fragment key={player.id}>
              <TeamPlayerListItem player={player} sport={sport} />
              {index < players.length - 1 && (
                <Separator
                  color="colors.onSurface.nLv4"
                  direction="horizontal"
                  length="100%"
                  thickness="1px"
                  marginTop="7px"
                />
              )}
            </Fragment>
          )
        })}
      </Card>
    </>
  )
}
