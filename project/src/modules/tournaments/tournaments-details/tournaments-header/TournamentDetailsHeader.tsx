import { Box, Flex, Text, Image } from '@kuma-ui/core'
import { Tournament } from '@/model/Backend'
import Card from '@/components/Card'
import iso3311a2 from 'iso-3166-1-alpha-2'
import Separator from '@/components/Separator'
import Link from 'next/link'
import TournamentsDetailsTop from './components/TournamentsDetailsTop'
import TournamentsDetailsNavigation from './components/TournamentsDetailsNavigation'
import Breadcrumbs from '@/components/Breadcrumbs'

interface TournamentDetailsHeaderProps {
  tournament: Tournament
}

export default function TournamentDetailsHeader({ tournament }: TournamentDetailsHeaderProps) {
  return (
    <>
      <Card borderRadius={[0, 0, 16, 16]} zIndex="1" position="relative">
        <Breadcrumbs
          display={['flex', 'flex', 'none', 'none']}
          items={[tournament.sport.name, tournament.name]}
          paddingX={'spacings.lg'}
        />
        <TournamentsDetailsTop tournament={tournament} />
        <TournamentsDetailsNavigation tournament={tournament} />
      </Card>
    </>
  )
}
