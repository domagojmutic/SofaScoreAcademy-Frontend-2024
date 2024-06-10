import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Player, Team } from '@/model/Backend'
import iso3311a2 from 'iso-3166-1-alpha-2'
import { getStandardCountryName } from '@/utils/country'

interface PlayersTopProps {
  player: Player
}

export default function PlayersTop({ player }: PlayersTopProps) {
  return (
    <>
      <Flex
        height={['64px', '64px', '112px', '112px']}
        paddingY={[4, 4, 16, 16]}
        gap="spacings.xxl"
        alignItems="center"
        bg="colors.surface.s1"
      >
        <Box
          width={['56px', '56px', '80px', '80px']}
          height={['56px', '56px', '80px', '80px']}
          padding={['spacings.sm', 'spacings.sm', 'spacings.md', 'spacings.md']}
          borderColor="colors.onSurface.nLv3"
          borderWidth="1px"
          borderStyle="solid"
          borderRadius="4px"
        >
          <Image src={`/api/player/${player.id}/image`} width="100%" />
        </Box>
        <Box padding={['4px', '4px', 'spacings.sm', 'spacings.sm']}>
          <Text as="h1" fontSize={['20px', '20px', '32px', '32px']} fontWeight="bold" color="colors.onSurface.nLv1">
            {player.name}
          </Text>
        </Box>
      </Flex>
    </>
  )
}
