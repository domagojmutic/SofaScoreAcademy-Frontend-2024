import { Tournament } from '@/model/Backend'
import { Flex, Image, Text } from '@kuma-ui/core'

interface TeamTournamentsProps {
  tournaments: Tournament[]
}

export default function TeamTournaments({ tournaments }: TeamTournamentsProps) {
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
        Tournaments
      </Text>
      <Flex justifyContent="stretch" alignItems="center" paddingX="spacings.md">
        {tournaments.map(tournament => {
          return (
            <Flex
              flexGrow="1"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="4px"
              paddingY="spacings.sm"
            >
              <Image src={`/api/tournament/${tournament.id}/image`} width="40px" height="40px" />
              <Text fontSize="fontSizes.xs" lineHeight="16px" color="colors.onSurface.nLv2" textAlign="center">
                {tournament.name}
              </Text>
            </Flex>
          )
        })}
      </Flex>
    </>
  )
}
