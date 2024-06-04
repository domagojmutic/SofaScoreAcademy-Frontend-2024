import { Box, Flex, Link, Image, Text } from '@kuma-ui/core'
import NextLink from 'next/link'

export default function Footer() {
  return (
    <Box as="footer" boxShadow="0 2px 16px 0 rgba(0, 0, 0, 0.12)">
      <Flex
        h="116px"
        w="100%"
        flexDirection="column"
        justify="space-between"
        alignItems="center"
        bg="colors.surface.s1"
        paddingTop="24px"
        paddingBottom="32px"
      >
        <Link as={NextLink} href="/">
          <Image src="/sofascore_lockup.svg" alt="SofaScore" width="132px" height="20px" filter="invert(1)" />
        </Link>
        <Text color="colors.onSurface.nLv2" fontSize="fontSizes.xs" lineHeight="fontSizes.md" fontStretch="condensed">
          © 2023 Sofascore - All Rights Reserved.
        </Text>
      </Flex>
    </Box>
  )
}