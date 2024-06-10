import { GoalIncident } from '@/model/Backend'
import { Box, Flex, Image, Text } from '@kuma-ui/core'
import Separator from '@/components/Separator'

interface BasketballGoalIncidentProps {
  incident: GoalIncident
}

export default function BasketballGoalIncident({ incident }: BasketballGoalIncidentProps) {
  let imgSource = ''
  let imgTitle = ''
  switch (incident.goalType) {
    case 'onepoint':
      imgSource = '/icons-incident/ic_num_basketball_incident_1.svg'
      break
    case 'twopoint':
      imgSource = '/icons-incident/ic_num_basketball_incident_2.svg'
      break
    case 'threepoint':
      imgSource = '/icons-incident/ic_num_basketball_incident_3.svg'
      break
    default:
      imgSource = '/icons-incident/ic_ball_football.svg'
  }

  return (
    <>
      <Flex
        height="40px"
        flexDirection={incident.scoringTeam === 'home' ? 'row' : 'row-reverse'}
        alignItems="center"
        position="relative"
      >
        <Box paddingY="spacings.sm" paddingX="spacings.lg">
          <Image src={imgSource} width="24px" height="24px" />
        </Box>
        <Separator thickness="1px" length="24px" direction="vertical" color="colors.onSurface.nLv4" />
        <Flex paddingX="4px" paddingY="spacings.md" alignItems="center" gap="4px">
          <Text
            textAlign="right"
            fontWeight="bold"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            width="32px"
            color="colors.onSurface.nLv1"
          >
            {incident.homeScore}
          </Text>
          <Text
            textAlign="center"
            fontWeight="bold"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            color="colors.onSurface.nLv1"
          >
            -
          </Text>
          <Text
            textAlign="left"
            fontWeight="bold"
            fontSize="fontSizes.sm"
            lineHeight="16px"
            width="32px"
            color="colors.onSurface.nLv1"
          >
            {incident.awayScore}
          </Text>
        </Flex>
        <Box position="absolute" width="24px" paddingTop="spacings.md" top="0" left="50%" transform="translateX(-50%)">
          <Text
            textAlign="center"
            fontSize="fontSizes.xs"
            lineHeight="16px"
            fontStretch="condensed"
            color="colors.onSurface.nLv2"
          >
            {incident.time}'
          </Text>
          <Separator color="colors.surface.s0" direction="horizontal" length="100%" thickness="1px" marginTop="11px" />
        </Box>
      </Flex>
    </>
  )
}
