import { Box, Flex } from '@kuma-ui/core'
import Separator from '@/components/Separator'

export default function IncidentSkeleton({ side }: { side: string }) {
  return (
    <>
      <Flex height="56px" flexDirection={side === 'left' ? 'row' : 'row-reverse'} alignItems="center">
        <Flex padding="spacings.sm" flexDirection="column" alignItems="center">
          <Box width="24px" height="24px" marginX="spacings.sm" borderRadius="50%" bg="black" opacity="0.25" />
          <Box height="14px" width="1em" bg="black" opacity="0.25" marginTop="2px" />
        </Flex>
        <Separator thickness="1px" length="40px" direction="vertical" color="colors.onSurface.nLv4" />
        <Flex padding="spacings.md" alignItems="center">
          <Box width="10em" height="16px" bg="black" opacity="0.25" />
        </Flex>
      </Flex>
    </>
  )
}
