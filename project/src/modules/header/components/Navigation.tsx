'use client'

import Separator from '@/components/Separator'
import { useThemeContext } from '@/context/ThemeContext'
import { Sport } from '@/model/Backend'
import { Flex, Text, Image, Link } from '@kuma-ui/core'
import NextLink from 'next/link'
import { useParams, usePathname } from 'next/navigation'

interface NavigationProps {
  sports: Sport[]
  selected?: string
}

export default function Navigation(props: NavigationProps) {
  const params = useParams()
  const pathname = usePathname()
  const { isDark } = useThemeContext()
  return (
    <Flex h="48px" w="100%" justify={['stretch', 'center', 'center', 'center']} alignItems="center" bg="colors.primary">
      {props.sports.map(sport => {
        return (
          <Link
            as={NextLink}
            href={pathname.endsWith('tournaments') ? `/${sport.slug}/tournaments` : `/${sport.slug}/events`}
            paddingX="spacings.sm"
            paddingTop={[4, 'spacings.lg', 'spacings.lg', 'spacings.lg']}
            paddingBottom={params.sport === sport.slug ? 0 : [8, 'spacings.lg', 'spacings.lg', 'spacings.lg']}
            key={sport.id}
            flexGrow={['1', '0', '0', '0']}
          >
            <Flex
              gap="4px"
              justify="space-around"
              alignItems="center"
              paddingX="4px"
              flexDirection={['column', 'row', 'row', 'row']}
            >
              <Image
                src={`/icons/icon_${sport.slug.replace('-', '_')}.svg`}
                alt=""
                width="16px"
                height="16px"
                filter={
                  isDark
                    ? 'brightness(0) saturate(100%) invert(11%) sepia(27%) saturate(513%) hue-rotate(187deg) brightness(90%) contrast(90%)'
                    : ''
                }
              />
              <Text color="colors.surface.s1" fontSize="fontSizes.sm" lineHeight="fontSizes.md">
                {sport.name}
              </Text>
            </Flex>
            {params.sport === sport.slug && (
              <Separator
                direction="horizontal"
                thickness="4px"
                length="100%"
                color="colors.surface.s1"
                mt={['4px', 'spacings.md', 'spacings.md', 'spacings.md']}
                mx="4px"
                borderRadius="2px 2px 0 0"
              />
            )}
          </Link>
        )
      })}
    </Flex>
  )
}
