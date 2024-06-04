import { Tournament } from '@/model/Backend'
import { Box, Flex, Image, Text } from '@kuma-ui/core'

interface MatchesTournamentHeaderProps {
  tournament: Tournament
}

export default function MatchesTournamentHeader({ tournament }: MatchesTournamentHeaderProps) {
  return (
    <Flex height="56px" paddingY="12px" paddingX="16px" gap="32px" alignItems="center">
      <Image src={`/api/tournament/${tournament.id}/image`} alt="" width="32px" height="32px" />
      <Flex alignItems="center">
        <Text color="colors.onSurface.nLv1" fontSize="fontSizes.sm" lineHeight="16px" fontWeight="bold">
          {tournament.country.name}
        </Text>
        <Box width="24px" height="24px">
          <Image src={`/ic_pointer_right.svg`} alt="" />
        </Box>
        <Text color="colors.onSurface.nLv2" fontSize="fontSizes.sm" lineHeight="16px" fontWeight="bold">
          {tournament.name}
        </Text>
      </Flex>
    </Flex>
  )
}
