import { GoalIncident } from '@/model/Backend'
import { Box, Flex, Image, Text } from '@kuma-ui/core'
import Separator from '@/components/Separator'

interface FootballGoalIncidentProps {
  incident: GoalIncident
}

export default function FootballGoalIncident({ incident }: FootballGoalIncidentProps) {
  let imgSource = ''
  let imgTitle = ''
  switch (incident.goalType) {
    case 'regular':
      imgSource = '/icons-incident/ic_ball_football.svg'
      imgTitle = 'Goal'
      break
    case 'owngoal':
      imgSource = '/icons-incident/ic_autogoal.svg'
      imgTitle = 'Auto goal'
      break
    case 'penalty':
      imgSource = '/icons-incident/ic_penalty_score.svg'
      imgTitle = 'Penalty'
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
