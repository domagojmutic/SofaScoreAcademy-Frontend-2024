import { Box } from '@kuma-ui/core'

export default function TournamentsListItemSkeleton() {
  return (
    <Box paddingX="spacings.lg" paddingY="spacings.sm" display="flex" alignItems="center">
      <Box bg="blue" />
      <Box width="40px" height="40px" borderRadius="50%" bg="colors.onSurface.nLv4" />
      <Box as="div" marginLeft="spacings.lg" height="16px" width="50%" bg="colors.onSurface.nLv4"></Box>
    </Box>
  )
}
