import { CardIncident as Incident } from '@/model/Backend'
import { Box, Flex, Image, Text } from '@kuma-ui/core'
import Separator from '@/components/Separator'

interface CardIncidentProps {
  incident: Incident
}

export default function CardIncident({ incident }: CardIncidentProps) {
  return (
    <>
      <Flex height="56px" flexDirection={incident.teamSide === 'home' ? 'row' : 'row-reverse'} alignItems="center">
        <Box padding="spacings.sm">
          <Image
            src={incident.color === 'yellow' ? '/icons-incident/ic_card_yellow.svg' : '/icons-incident/ic_card_red.svg'}
            title={incident.color === 'yellow' ? 'Yellow Card' : 'Red Card'}
            width="24px"
            height="24px"
            marginX="spacings.sm"
          />
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
        <Flex padding="spacings.md" alignItems="center">
          <Text fontSize="fontSizes.sm" color="colors.onSurface.nLv1" lineHeight="16px">
            {incident.player.name}
          </Text>
        </Flex>
      </Flex>
    </>
  )
}
