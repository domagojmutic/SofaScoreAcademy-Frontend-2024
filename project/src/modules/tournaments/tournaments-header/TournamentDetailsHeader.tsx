import { Tournament } from '@/model/Backend'
import Card from '@/components/Card'
import TournamentsDetailsTop from './components/TournamentsDetailsTop'
import TournamentsDetailsNavigation from './components/TournamentsDetailsNavigation'
import Breadcrumbs from '@/components/Breadcrumbs'

interface TournamentDetailsHeaderProps {
  tournament: Tournament
}

export default function TournamentDetailsHeader({ tournament }: TournamentDetailsHeaderProps) {
  return (
    <>
      <Card
        borderRadius={[0, 0, 16, 16]}
        zIndex="1"
        position={['sticky', 'sticky', 'relative', 'relative']}
        top={['48px', '48px', 0, 0]}
      >
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
