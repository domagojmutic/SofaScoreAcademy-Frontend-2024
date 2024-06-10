import { Player } from '@/model/Backend'
import { Box, Flex, Image, Text } from '@kuma-ui/core'
import { getStandardCountryName } from '@/utils/country'
import iso3311a2 from 'iso-3166-1-alpha-2'
import Link from 'next/link'

interface TeamDetailsProps {
  player: Player
  sport: string
}

export default function TeamPlayerListItem({ player, sport }: TeamDetailsProps) {
  return (
    <>
      <Flex
        as={Link}
        href={'/' + sport + '/players/' + player.id + '/matches'}
        paddingX="spacings.md"
        paddingY="spacings.sm"
        gap="spacings.md"
        _hover={{ bg: 'colors.surface.s2' }}
      >
        <Image
          src={`/api/player/${player.id}/image`}
          width="40px"
          height="40px"
          bg="colors.onSurface.nLv4"
          borderRadius="50%"
          alt=""
          borderColor="colors.onSurface.nLv4"
          borderWidth="1px"
          borderStyle="solid"
        />
        <Box>
          <Text color="colors.onSurface.nLv1" fontSize="fontSizes.sm" lineHeight="16px">
            {player.name}
          </Text>
          <Flex marginTop="4px" gap="4px" alignItems="center">
            <Image
              src={`https://www.sofascore.com/static/images/flags/${(
                iso3311a2.getCode(getStandardCountryName(player.country.name)) ||
                getStandardCountryName(player.country.name)
              )?.toLowerCase()}.png`}
              width="16px"
              height="16px"
              borderRadius="50%"
              borderColor="colors.onSurface.nLv4"
              borderWidth="1px"
              borderStyle="solid"
            />
            <Text as="h3" fontSize="fontSizes.xs" fontWeight="bold" color="colors.onSurface.nLv2">
              {player.country.name}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
