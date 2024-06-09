import { Tournament } from '@/model/Backend'
import { Box, Flex, Text } from '@kuma-ui/core'
import Link from 'next/link'

interface MatchesIncidentListProps {
  tournament?: Tournament
}

export default function MatchesNoIncidents({ tournament }: MatchesIncidentListProps) {
  return (
    <>
      <Box padding="spacings.sm">
        <Flex height="52px" bg="colors.surface.s2" alignItems="center" justifyContent="center" borderRadius="8px">
          <Text color="colors.onSurface.nLv2" fontSize="fontSizes.md" lineHeight="20px">
            No results yet.
          </Text>
        </Flex>
        <Flex
          as={Link}
          href={'/' + tournament?.sport.slug + '/tournaments/' + tournament?.id + '/matches'}
          marginTop="spacings.lg"
          marginBottom={['spacings.lg', 'spacings.lg', '32px', '32px']}
        >
          <Text
            marginX="auto"
            paddingX="spacings.lg"
            paddingY="spacings.sm"
            borderWidth="2px"
            borderColor="colors.primary"
            borderStyle="solid"
            color="colors.primary"
            fontWeight="fontWeights.bold"
          >
            View Tournament Details
          </Text>
        </Flex>
      </Box>
    </>
  )
}
