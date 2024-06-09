import DonutChart from '@/components/DonutChart'
import Separator from '@/components/Separator'
import { Player, Team } from '@/model/Backend'
import { Box, Flex, Image, Text } from '@kuma-ui/core'

interface TeamInfoProps {
  team: Team
  players: Player[]
}

export default function TeamInfo({ team, players }: TeamInfoProps) {
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
        Team Info
      </Text>
      <Flex height="56px" alignItems="center" gap="spacings.lg" paddingX="spacings.lg">
        <Box width="40px" height="40px" borderRadius="50%" bg="colors.onSurface.nLv4" />
        <Text fontSize="fontSizes.sm" lineHeight="16px" color="colors.onSurface.nLv1">
          Manager: {team.managerName}
        </Text>
      </Flex>
      <Separator color="colors.onSurface.nLv4" direction="horizontal" length="100%" thickness="1px" marginTop="7px" />
      <Flex justifyContent="stretch" alignItems="center" paddingX="spacings.md">
        <Flex
          flexGrow="1"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="spacings.sm"
          paddingY="spacings.sm"
        >
          <Image src="/ic_team.svg" width="40px" height="40px" />
          <Text
            fontSize="fontSizes.sm"
            fontWeight="fontWeights.bold"
            lineHeight="16px"
            color="colors.primary"
            textAlign="center"
          >
            {players.length}
          </Text>
          <Text fontSize="fontSizes.xs" lineHeight="16px" color="colors.onSurface.nLv2" textAlign="center">
            Total Players
          </Text>
        </Flex>

        <Flex
          flexGrow="1"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="spacings.sm"
          paddingY="spacings.sm"
        >
          <DonutChart
            size={40}
            percent={(players.filter(player => player.country.id !== team.country.id).length / players.length) * 100}
            padding="4px"
          />
          <Text
            fontSize="fontSizes.sm"
            fontWeight="fontWeights.bold"
            lineHeight="16px"
            color="colors.primary"
            textAlign="center"
          >
            {players.filter(player => player.country.id !== team.country.id).length}
          </Text>
          <Text fontSize="fontSizes.xs" lineHeight="16px" color="colors.onSurface.nLv2" textAlign="center">
            Foreign Players
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
