import { Box, Flex, Image } from '@kuma-ui/core'

export default function MatchesTournamentHeaderSkeleton() {
  return (
    <Flex height="56px" paddingY="12px" paddingX="16px" gap="32px" alignItems="center">
      <Box width="32px" height="32px" borderRadius="50%" bg="black" opacity="0.25" />
      <Flex alignItems="center">
        <Box bg="black" opacity="0.25" height="16px" width="4em" />
        <Box width="24px" height="24px">
          <Image src={`/ic_pointer_right.svg`} alt="" />
        </Box>
        <Box bg="black" opacity="0.25" height="16px" width="4em" />
      </Flex>
    </Flex>
  )
}
