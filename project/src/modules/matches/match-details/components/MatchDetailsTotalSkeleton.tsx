import { Box, Flex, Text } from '@kuma-ui/core'

export default function MatchDetailsTotalSkeleton() {
  return (
    <>
      <Flex height="112px" padding="spacings.lg" alignItems="flex-start">
        <Flex width="96px" flexDirection="column" gap="spacings.sm" alignItems="center">
          <Box width="40px" height="40px" bg="black" opacity="0.25" borderRadius="50%" />
          <Box width="5em" height="16px" bg="black" opacity="0.25" />
        </Flex>
        <Flex flexGrow="1" flexDirection="column" alignItems="center">
          <Flex justifyContent="center" gap="4px">
            <Box
              textAlign="right"
              fontWeight="bold"
              fontSize="32px"
              height="40px"
              width="1em"
              bg="black"
              opacity="0.25"
            />
            <Text textAlign="center" fontWeight="bold" fontSize="32px" lineHeight="40px">
              -
            </Text>
            <Box
              textAlign="right"
              fontWeight="bold"
              fontSize="32px"
              height="40px"
              width="1em"
              bg="black"
              opacity="0.25"
            />
          </Flex>
          <Box height="14px" width="1em" bg="black" opacity="0.25" marginTop="4px" />
        </Flex>
        <Flex width="96px" flexDirection="column" gap="spacings.sm" alignItems="center">
          <Box width="40px" height="40px" bg="black" opacity="0.25" borderRadius="50%" />
          <Box width="5em" height="16px" bg="black" opacity="0.25" />
        </Flex>
      </Flex>
    </>
  )
}
