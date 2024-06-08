import { Flex, Image, Link } from '@kuma-ui/core'
import NextLink from 'next/link'

export default function TopHeader() {
  return (
    <Flex
      h="64px"
      w="100%"
      justify={['space-between', 'center', 'center', 'center']}
      alignItems="center"
      bg="colors.primary"
      paddingX="spacings.lg"
    >
      <Link as={NextLink} href="/">
        <Image src="/sofascore_lockup.svg" alt="SofaScore" width="132px" height="20px" />
      </Link>
      <Flex width="24px" height="24px">
        <Link as={NextLink} href="/settings" position="absolute" right="20px">
          <Image src="/ic_settings.svg" alt="" width="24px" height="24px" />
        </Link>
      </Flex>
    </Flex>
  )
}
