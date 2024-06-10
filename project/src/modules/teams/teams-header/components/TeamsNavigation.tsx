'use client'
import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Team } from '@/model/Backend'
import Separator from '@/components/Separator'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface TeamDetailsNavigationProps {
  team: Team
}

export default function TeamDetailsNavigation({ team }: TeamDetailsNavigationProps) {
  const path = usePathname()
  const params = useParams()
  const [selected, setSelected] = useState<'details' | 'matches' | 'standings' | 'players'>()

  useEffect(() => {
    if (path.endsWith('standings')) setSelected('standings')
    else if (path.endsWith('matches')) setSelected('matches')
    else if (path.endsWith('details')) setSelected('details')
    else if (path.endsWith('players')) setSelected('players')
  }, [path])
  return (
    <>
      <Flex height="48px" paddingX="spacings.lg">
        <Box
          as={Link}
          href={'/' + params.sport + '/teams/' + team.id + '/details'}
          paddingTop="spacings.lg"
          paddingX="spacings.sm"
          textAlign="center"
          flexGrow={[1, 0, 0, 0]}
        >
          <Text
            color={selected === 'details' ? 'colors.primary' : 'colors.onSurface.nLv2'}
            fontSize="fontSizes.sm"
            lineHeight="16px"
          >
            Details
          </Text>
          {selected === 'details' && (
            <Separator
              color="colors.primary"
              length="100%"
              direction="horizontal"
              thickness="4px"
              marginTop="12px"
              borderRadius="2px 2px 0 0"
            />
          )}
        </Box>
        <Box
          as={Link}
          href={'/' + params.sport + '/teams/' + team.id + '/matches'}
          paddingTop="spacings.lg"
          paddingX="spacings.sm"
          textAlign="center"
          flexGrow={[1, 0, 0, 0]}
        >
          <Text
            color={selected === 'matches' ? 'colors.primary' : 'colors.onSurface.nLv2'}
            fontSize="fontSizes.sm"
            lineHeight="16px"
          >
            Matches
          </Text>
          {selected === 'matches' && (
            <Separator
              color="colors.primary"
              length="100%"
              direction="horizontal"
              thickness="4px"
              marginTop="12px"
              borderRadius="2px 2px 0 0"
            />
          )}
        </Box>
        <Box
          as={Link}
          href={'/' + params.sport + '/teams/' + team.id + '/standings'}
          paddingTop="spacings.lg"
          paddingX="spacings.sm"
          textAlign="center"
          flexGrow={[1, 0, 0, 0]}
        >
          <Text
            color={selected === 'standings' ? 'colors.primary' : 'colors.onSurface.nLv2'}
            fontSize="fontSizes.sm"
            lineHeight="16px"
          >
            Standings
          </Text>
          {selected === 'standings' && (
            <Separator
              color="colors.primary"
              length="100%"
              direction="horizontal"
              thickness="4px"
              marginTop="12px"
              borderRadius="2px 2px 0 0"
            />
          )}
        </Box>
        <Box
          as={Link}
          href={'/' + params.sport + '/teams/' + team.id + '/players'}
          paddingTop="spacings.lg"
          paddingX="spacings.sm"
          textAlign="center"
          flexGrow={[1, 0, 0, 0]}
        >
          <Text
            color={selected === 'players' ? 'colors.primary' : 'colors.onSurface.nLv2'}
            fontSize="fontSizes.sm"
            lineHeight="16px"
          >
            Squad
          </Text>
          {selected === 'players' && (
            <Separator
              color="colors.primary"
              length="100%"
              direction="horizontal"
              thickness="4px"
              marginTop="12px"
              borderRadius="2px 2px 0 0"
            />
          )}
        </Box>
      </Flex>
    </>
  )
}
