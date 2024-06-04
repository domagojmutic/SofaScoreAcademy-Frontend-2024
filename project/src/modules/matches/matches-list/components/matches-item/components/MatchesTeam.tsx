import { Text, Image, Flex, FlexProps } from '@kuma-ui/core'
import { Team } from '@/model/Backend'

interface MatchesTeamItemProps {
  team: Omit<Team, 'managerName' | 'venue'>
  winner: boolean
}

export default function MatchesTeam({ team, winner, ...rest }: MatchesTeamItemProps & FlexProps) {
  return (
    <Flex {...rest} gap="8px">
      <Image src={`/api/team/${team.id}/image`} alt="" width="16px" height="16px" />
      <Text
        color={winner ? 'colors.onSurface.nLv1' : 'colors.onSurface.nLv2'}
        fontSize="fontSizes.xs"
        lineHeight="16px"
        textAlign="left"
      >
        {team.name}
      </Text>
    </Flex>
  )
}
