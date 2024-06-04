import { Box, Text, Image } from '@kuma-ui/core'
import { Tournament } from '@/model/Backend'
import Link from 'next/link'

interface TournamentsListItemProps {
  tournament: Tournament
  params: { sport: string }
}

export default function TournamentsListItem({ tournament, params }: TournamentsListItemProps) {
  return (
    <Box
      as={Link}
      href={'/' + params.sport + '/tournaments/' + tournament.slug}
      paddingX="spacings.lg"
      paddingY="spacings.sm"
      display="flex"
      alignItems="center"
      _hover={{ bg: 'rgba(0,0,0,0.1)' }}
    >
      <Image src={`/api/tournament/${tournament.id}/image`} alt={tournament.slug} width="40px" height="40px" />
      <Text
        as="h3"
        marginLeft="spacings.lg"
        color="colors.onSurface.nLv1"
        fontWeight="bold"
        fontSize="fontSizes.sm"
        lineHeight="16px"
      >
        {tournament.name}
      </Text>
    </Box>
  )
}
