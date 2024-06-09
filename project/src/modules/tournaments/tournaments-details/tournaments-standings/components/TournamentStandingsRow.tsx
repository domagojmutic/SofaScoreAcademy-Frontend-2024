import { Box, Flex, Text } from '@kuma-ui/core'
import { Standings } from '@/model/Backend'
import { useParams, useRouter } from 'next/navigation'

interface TournamentStandingsRowProps {
  index: number
  standingsRow: Standings['sortedStandingsRows'][0]
  fields: (
    | {
        name: string
        value: (obj: Standings['sortedStandingsRows'][0]) => number
      }
    | {
        name: string
        value: (obj: Standings['sortedStandingsRows'][0]) => string
      }
  )[]
}

export default function TournamentStandingsRow({ index, standingsRow, fields }: TournamentStandingsRowProps) {
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
        {fields.map(field => {
          return (
            <Box as="td">
              <Text
                textAlign="center"
                color="colors.onSurface.nLv1"
                fontSize="fontSizes.sm"
                lineHeight="16px"
                fontWeight="fontWeights.normal"
                fontStretch="condensed"
              >
                {field.value(standingsRow)}
              </Text>
            </Box>
          )
        })}
      </Box>
    </>
  )
}
