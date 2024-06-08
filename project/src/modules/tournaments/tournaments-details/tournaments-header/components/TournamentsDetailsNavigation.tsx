'use client'
import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Tournament } from '@/model/Backend'
import Separator from '@/components/Separator'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface TournamentDetailsNavigationProps {
  tournament: Tournament
}

export default function TournamentDetailsNavigation({ tournament }: TournamentDetailsNavigationProps) {
  const path = usePathname()
  const [selected, setSelected] = useState('matches')

  useEffect(() => {
    if (path.endsWith('standings')) setSelected('standings')
    else setSelected('matches')
  }, [path])
  return (
    <>
      <Flex height="48px" paddingX="spacings.lg">
        <Box as={Link} href={'matches'} paddingTop="spacings.lg" paddingX="spacings.sm" textAlign="center" flexGrow={[1, 0, 0, 0]}>
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
        <Box as={Link} href={'standings'} paddingTop="spacings.lg" paddingX="spacings.sm" textAlign="center" flexGrow={[1, 0, 0, 0]}>
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
      </Flex>
    </>
  )
}
