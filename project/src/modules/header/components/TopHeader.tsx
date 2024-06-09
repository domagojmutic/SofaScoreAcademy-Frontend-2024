'use client'
import { Box, Flex, Image } from '@kuma-ui/core'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function TopHeader() {
  const params = useParams()
  return (
    <Flex
      h="48px"
      w="100%"
      justify={['space-between', 'center', 'center', 'center']}
      alignItems="center"
      bg="colors.primary"
      paddingX="spacings.lg"
      position="relative"
      zIndex={10}
    >
      <Box as={Link} href="/">
        <Image src="/sofascore_lockup.svg" alt="SofaScore" width="132px" height="20px" />
      </Box>
      <Flex position="absolute" right="20px" gap="spacings.xxl">
        <Box
          as={Link}
          href={'/' + (params.sport ? params.sport : 'football') + '/tournaments'}
          display={['block', 'block', 'block', 'none']}
        >
          <Image src="/ic_tournaments.svg" alt="" width="24px" height="24px" />
        </Box>
        <Box as={Link} href="/settings">
          <Image src="/ic_settings.svg" alt="" width="24px" height="24px" />
        </Box>
      </Flex>
    </Flex>
  )
}
