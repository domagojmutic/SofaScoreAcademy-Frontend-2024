import { Standings } from '@/model/Backend'
import { Box } from '@kuma-ui/core'

interface TournamentStandingsHeaderProps {
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

export default function TournamentStandingsHeader({ fields }: TournamentStandingsHeaderProps) {
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

          {fields.map(field => {
            return (
              <Box
                as="th"
                textAlign="center"
                color="colors.onSurface.nLv2"
                fontSize="fontSizes.sm"
                lineHeight="16px"
                fontWeight="fontWeights.normal"
                fontStretch="condensed"
                key={field.name}
              >
                {field.name}
              </Box>
            )
          })}
        </Box>
      </thead>
    </>
  )
}
