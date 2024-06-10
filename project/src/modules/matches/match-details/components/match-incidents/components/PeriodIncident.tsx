import { PeriodIncident as Incident, Match } from '@/model/Backend'
import { Box, Text } from '@kuma-ui/core'

interface PeriodIncidentProps {
  incident: Incident
}

export default function PeriodIncident({ incident }: PeriodIncidentProps) {
  return (
    <>
      <Box height="40px" padding="spacings.sm">
        <Box bg="colors.secondaryHighlight" padding="4px" borderRadius="16px">
          <Text fontSize="fontSizes.xs" fontWeight="bold" lineHeight="16px" textAlign="center">
            {incident.text}
          </Text>
        </Box>
      </Box>
    </>
  )
}
