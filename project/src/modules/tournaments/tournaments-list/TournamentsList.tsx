import { Box, Text } from '@kuma-ui/core'
import { Tournament } from '@/model/Backend'
import Card from '@/components/Card'
import TournamentsListItem from './components/TournamentsItem'
import TournamentsListItemSkeleton from './components/TournamentsItemSkeleton'

interface TournamentListProps {
  tournaments?: Tournament[]
  params: { sport: string }
}

export default function TournamentsList({ tournaments, params }: TournamentListProps) {
  return (
    <Card borderRadius={[0, 0, 16, 16]}>
      <Box paddingY="spacings.lg">
        <Box paddingX="spacings.lg" paddingY="10px">
          <Text as="h1" color="colors.onSurface.nLv1" fontWeight="bold" fontSize="fontSizes.lg" lineHeight="28px">
            Leagues
          </Text>
        </Box>

        {tournaments &&
          tournaments.map(tournament => {
            return <TournamentsListItem tournament={tournament} params={params} key={tournament.id} />
          })}
        {!tournaments &&
          Array.from({ length: 1 }).map((_, i) => {
            return <TournamentsListItemSkeleton key={i} />
          })}

        <Box paddingX="spacings.lg" marginTop="spacings.xl" textAlign={['center', 'left', 'left', 'left']}>
          <Text
            as="span"
            color="colors.primary"
            fontWeight="bold"
            fontSize="fontSizes.md"
            lineHeight="24px"
            border={['2px solid', 'none', 'none', 'none']}
            borderColor={'colors.primary'}
            paddingX="spacings.lg"
            paddingY="spacings.sm"
          >
            View More
          </Text>
        </Box>
      </Box>
    </Card>
  )
}
