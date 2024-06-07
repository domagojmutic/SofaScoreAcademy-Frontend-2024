import { Box, Flex, Text } from '@kuma-ui/core'
import { Standings } from '@/model/Backend'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

interface TournamentStandingsRowProps {
  index: number
  standingsRow: Standings['sortedStandingsRows'][0]
}

export default function TournamentStandingsRow({ index, standingsRow }: TournamentStandingsRowProps) {
  const params = useParams()
  const router = useRouter()

  return (
    <>
      <Box
        as="tr"
        height="48px"
        cursor="pointer"
        onClick={() => {
          router.push('/' + params.sport + '/teams/' + standingsRow.team.id)
        }}
      >
        <Box as="td" width="24px" paddingX="spacings.sm">
          <Flex
            as="span"
            bg="colors.secondary"
            borderRadius="50%"
            width="24px"
            height="24px"
            justifyContent="center"
            alignItems="center"
          >
            <Text
              textAlign="center"
              color="colors.onSurface.nLv1"
              fontSize="fontSizes.sm"
              lineHeight="16px"
              fontWeight="fontWeights.normal"
              fontStretch="condensed"
            >
              {index}
            </Text>
          </Flex>
        </Box>
        <Box as="td">
          <Text
            textAlign="left"
            color="colors.onSurface.nLv1"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            {standingsRow.team.name}
          </Text>
        </Box>
        <Box as="td">
          <Text
            textAlign="center"
            color="colors.onSurface.nLv1"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            {standingsRow.played}
          </Text>
        </Box>
        <Box as="td">
          <Text
            textAlign="center"
            color="colors.onSurface.nLv1"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            {standingsRow.wins}
          </Text>
        </Box>
        <Box as="td">
          <Text
            textAlign="center"
            color="colors.onSurface.nLv1"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            {standingsRow.draws}
          </Text>
        </Box>
        <Box as="td">
          <Text
            textAlign="center"
            color="colors.onSurface.nLv1"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            {standingsRow.losses}
          </Text>
        </Box>
        <Box as="td">
          <Text
            textAlign="center"
            color="colors.onSurface.nLv1"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            {standingsRow.scoresFor}:{standingsRow.scoresAgainst}
          </Text>
        </Box>
        <Box as="td">
          <Text
            textAlign="center"
            color="colors.onSurface.nLv1"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            fontWeight="fontWeights.normal"
            fontStretch="condensed"
          >
            {standingsRow.points}
          </Text>
        </Box>
      </Box>
    </>
  )
}
