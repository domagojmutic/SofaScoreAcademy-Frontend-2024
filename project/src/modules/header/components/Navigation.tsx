import { Sport } from '@/model/Backend'
import { Box, Flex, Text, Image, Link } from '@kuma-ui/core'
import NextLink from 'next/link'

interface NavigationProps {
  sports: Sport[]
}

export default function Navigation(props: NavigationProps) {
  return (
    <Flex h="48px" w="100%" justify="center" alignItems="center" bg="colors.primary">
      {props.sports.map(sport => {
        return (
          <Link
            as={NextLink}
            href={`/${sport.slug}/events`}
            paddingX="spacings.sm"
            paddingY="spacings.lg"
            key={sport.id}
          >
            <Flex gap="4px" justify="space-around" paddingX="4px">
              <Image src={`/icons/icon_${sport.slug.replace('-', '_')}.svg`} alt="" width="16px" height="16px" />
              <Text color="colors.surface.s1" fontSize="fontSizes.sm" lineHeight="fontSizes.md">
                {sport.name}
              </Text>
            </Flex>
          </Link>
        )
      })}
    </Flex>
  )
}
