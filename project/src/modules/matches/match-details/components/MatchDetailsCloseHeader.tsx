'use client'
import { Button, Flex, Image, Text } from '@kuma-ui/core'
import Link from 'next/link'
import { useParams, usePathname, useRouter } from 'next/navigation'

interface MatchDetailsCloseHeaderProps {
  matchId: string
}

export default function MatchesDetailsCloseHeader({ matchId }: MatchDetailsCloseHeaderProps) {
  const params = useParams()
  const router = useRouter()
  const pathname = usePathname()

  return (
    <>
      <Flex height="56px" padding="spacings.lg" justifyContent="space-between" alignItems="center">
        <Button width="24px" height="24px" bg="none" padding="0" onClick={() => router.push(pathname)}>
          <Image src="/ic_close.svg" />
        </Button>
        <Flex
          as={Link}
          href={'/' + params.sport + '/events/' + matchId}
          justifyContent="center"
          alignItems="center"
          flexDirection="row"
          flexWrap="nowrap"
        >
          <Text color="colors.primary" fontSize="fontSizes.md" lineHeight="24px" fontWeight="bold">
            View Full Page
          </Text>
          <Image src="/ic_chevron_right.svg" width="24px" height="24px" />
        </Flex>
      </Flex>
    </>
  )
}
