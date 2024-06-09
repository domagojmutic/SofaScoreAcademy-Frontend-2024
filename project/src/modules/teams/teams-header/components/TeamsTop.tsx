import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Team } from '@/model/Backend'
import iso3311a2 from 'iso-3166-1-alpha-2'
import { getStandardCountryName } from '@/utils/country'

interface TeamDetailsTopProps {
  team: Team
}

export default function TeamDetailsTop({ team }: TeamDetailsTopProps) {
  return (
    <>
      <Flex
        height={['64px', '64px', '112px', '112px']}
        paddingX="spacings.lg"
        paddingY={[4, 4, 16, 16]}
        gap="spacings.xxl"
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
          <Image src={`/api/team/${team.id}/image`} width="100%" />
        </Box>
        <Box padding={['4px', '4px', 'spacings.sm', 'spacings.sm']}>
          <Text as="h1" fontSize={['20px', '20px', '32px', '32px']} fontWeight="bold" color="colors.onSurface.nLv1">
            {team.name}
          </Text>
          <Flex gap="4px" alignItems="center">
            <Image
              src={`https://www.sofascore.com/static/images/flags/${iso3311a2
                .getCode(getStandardCountryName(team.country.name))
                ?.toLowerCase()}.png`}
              width="16px"
              height="16px"
              borderRadius="50%"
              borderColor="colors.onSurface.nLv4"
              borderWidth="1px"
              borderStyle="solid"
            />
            <Text as="h3" fontSize="fontSizes.sm" fontWeight="bold" color="colors.onSurface.nLv1">
              {team.country.name}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
