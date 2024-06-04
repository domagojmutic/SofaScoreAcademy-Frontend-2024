import { GoalIncident } from '@/model/Backend'
import { Box, Flex, Image, Text } from '@kuma-ui/core'
import Separator from '@/components/Separator'

interface AmericanFootballGoalIncidentProps {
  incident: GoalIncident
}

export default function AmericanFootballGoalIncident({ incident }: AmericanFootballGoalIncidentProps) {
  let imgSource = ''
  let imgTitle = ''
  switch (incident.goalType) {
    case 'fieldgoal':
      imgSource = '/icons-incident/ic_field_goal.svg'
      imgTitle = 'Field goal'
      break
    case 'onepoint':
      imgSource = '/icons-incident/ic_rugby_point_1.svg'
      imgTitle = '1 point'
      break
    case 'twopoint':
      imgSource = '/icons-incident/ic_rugby_point_2.svg'
      imgTitle = '2 points'
      break
    case 'threepoint':
      imgSource = '/icons-incident/ic_rugby_point_3.svg'
      imgTitle = '3 points'
      break
    case 'extrapoint':
      imgSource = '/icons-incident/ic_extra_point.svg'
      imgTitle = 'Extra point'
      break
    case 'touchdown':
      imgSource = '/icons-incident/ic_touchdown.svg'
      imgTitle = 'Touchdown'
      break
    default:
      imgSource = '/icons-incident/ic_ball_football.svg'
      imgTitle = incident.goalType
  }

  return (
    <>
      <Flex height="56px" flexDirection={incident.scoringTeam === 'home' ? 'row' : 'row-reverse'} alignItems="center">
        <Box padding="spacings.sm">
          <Image src={imgSource} width="24px" height="24px" marginX="spacings.sm" title={imgTitle} />
          <Text
            fontSize="fontSizes.xs"
            color="colors.onSurface.nLv2"
            lineHeight="16px"
            fontStretch="condensed"
            textAlign="center"
          >
            {incident.time}'
          </Text>
        </Box>
        <Separator thickness="1px" length="40px" direction="vertical" color="colors.onSurface.nLv4" />
        <Flex
          paddingX="spacings.sm"
          paddingY="spacings.md"
          alignItems="center"
          flexDirection={incident.scoringTeam === 'home' ? 'row' : 'row-reverse'}
          gap="spacings.sm"
        >
          <Flex gap="4px">
            <Text
              textAlign="right"
              fontWeight="bold"
              fontSize="fontSizes.lg"
              lineHeight="28px"
              width="32px"
              color="colors.onSurface.nLv1"
            >
              {incident.homeScore}
            </Text>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="fontSizes.lg"
              lineHeight="28px"
              color="colors.onSurface.nLv1"
            >
              -
            </Text>
            <Text
              textAlign="left"
              fontWeight="bold"
              fontSize="fontSizes.lg"
              lineHeight="28px"
              width="32px"
              color="colors.onSurface.nLv1"
            >
              {incident.awayScore}
            </Text>
          </Flex>
          <Text fontSize="fontSizes.sm" color="colors.onSurface.nLv1" lineHeight="16px">
            {incident.player.name}
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
