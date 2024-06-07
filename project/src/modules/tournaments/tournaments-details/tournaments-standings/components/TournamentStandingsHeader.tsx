import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Tournament } from '@/model/Backend'
import Card from '@/components/Card'
import iso3311a2 from 'iso-3166-1-alpha-2'
import Separator from '@/components/Separator'
import Link from 'next/link'

interface TournamentStandingsHeaderProps {}

export default function TournamentStandingsHeader() {
  return (
    <>
      <thead>
        <Box as="tr" height="48px">
          <Box
            as="th"
            textAlign="center"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            #
          </Box>
          <Box
            as="th"
            textAlign="left"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            Team
          </Box>

          <Box
            as="th"
            textAlign="center"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            P
          </Box>

          <Box
            as="th"
            textAlign="center"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            W
          </Box>

          <Box
            as="th"
            textAlign="center"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            D
          </Box>

          <Box
            as="th"
            textAlign="center"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            L
          </Box>

          <Box
            as="th"
            textAlign="center"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            Goals
          </Box>

          <Box
            as="th"
            textAlign="center"
            color="colors.onSurface.nLv2"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            PTS
          </Box>
        </Box>
      </thead>
    </>
  )
}
