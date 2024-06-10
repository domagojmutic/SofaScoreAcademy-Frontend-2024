import Separator from '@/components/Separator'
import { Box, Flex } from '@kuma-ui/core'

export default function MatchesListItemSkeleton() {
  return (
    <Flex paddingX="spacings.lg" paddingY="spacings.sm" display="flex" alignItems="center">
      <Box width="64px" height="56px" paddingX="4px" paddingY="10px">
        <Box height="16px" width="2em" bg="colors.onSurface.nLv4" marginX="auto" />
        <Box marginTop="4px" height="16px" width="2em" bg="colors.onSurface.nLv4" marginX="auto" />
      </Box>
      <Separator direction="vertical" thickness="1px" length="40px" color="colors.onSurface.nLv4" />
      <Box flexGrow="1" paddingX="16px" paddingY="10px">
        <Flex gap="8px">
          <Box width="16px" height="16px" bg="colors.onSurface.nLv4" />
          <Box width="50%" height="16px" bg="colors.onSurface.nLv4" />
        </Flex>
        <Flex gap="8px" marginTop="4px">
          <Box width="16px" height="16px" bg="colors.onSurface.nLv4" />
          <Box width="50%" height="16px" bg="colors.onSurface.nLv4" />
        </Flex>
      </Box>
      <Box width="32px" paddingX="16px" paddingY="10px">
        <Box height="16px" width="1em" bg="colors.onSurface.nLv4" />
        <Box height="16px" width="1em" bg="colors.onSurface.nLv4" marginTop="4px" />
      </Box>
    </Flex>
  )
}
