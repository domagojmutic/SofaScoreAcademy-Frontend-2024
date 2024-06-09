import { Team } from '@/model/Backend'
import { Flex, Text } from '@kuma-ui/core'

interface TeamVenueProps {
  team: Team
}

export default function TeamVenue({ team }: TeamVenueProps) {
  return (
    <>
      <Text
        as="h2"
        paddingX="spacings.lg"
        fontSize="fontSizes.md"
        fontWeight="fontWeights.bold"
        lineHeight="20px"
        color="colors.onSurface.nLv1"
        textAlign="center"
      >
        Venue
      </Text>
      <Flex height="32px" justifyContent="space-between" alignItems="center" gap="spacings.lg" paddingX="spacings.lg">
        <Text fontSize="fontSizes.sm" lineHeight="16px" color="colors.onSurface.nLv1">
          Stadium
        </Text>
        <Text fontSize="fontSizes.sm" lineHeight="16px" color="colors.onSurface.nLv1">
          {team.venue}
        </Text>
      </Flex>
    </>
  )
}
