import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Tournament } from '@/model/Backend'
import iso3311a2 from 'iso-3166-1-alpha-2'

interface TournamentDetailsTopProps {
  tournament: Tournament
}

export default function TournamentDetailsTop({ tournament }: TournamentDetailsTopProps) {
  return (
    <>
      <Flex height="112px" padding="spacings.lg" gap="spacings.xxl">
        <Box
          width="80px"
          height="80px"
          padding="spacings.md"
          borderColor="colors.onSurface.nLv3"
          borderWidth="1px"
          borderStyle="solid"
          borderRadius="4px"
        >
          <Image src={`/api/tournament/${tournament.id}/image`} width="100%" />
        </Box>
        <Box padding="10px">
          <Text as="h1" fontSize="32px" fontWeight="bold" color="colors.onSurface.nLv1">
            {tournament.name}
          </Text>
          <Flex gap="4px" alignItems="center">
            <Image
              src={`https://www.sofascore.com/static/images/flags/${iso3311a2
                .getCode(tournament.country.name)
                ?.toLowerCase()}.png`}
              width="16px"
              height="16px"
              borderRadius="50%"
              borderColor="colors.onSurface.nLv4"
              borderWidth="1px"
              borderStyle="solid"
            />
            <Text as="h3" fontSize="fontSizes.sm" fontWeight="bold" color="colors.onSurface.nLv1">
              {tournament.country.name}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </>
  )
}
