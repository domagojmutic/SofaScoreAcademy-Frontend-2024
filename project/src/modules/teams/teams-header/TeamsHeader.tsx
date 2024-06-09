'use client'
import { Team } from '@/model/Backend'
import Card from '@/components/Card'
import Breadcrumbs from '@/components/Breadcrumbs'
import TeamDetailsTop from './components/TeamsTop'
import TeamDetailsNavigation from './components/TeamsNavigation'
import { useParams } from 'next/navigation'

interface TournamentDetailsHeaderProps {
  team: Team
}

export default function TeamDetailsHeader({ team }: TournamentDetailsHeaderProps) {
  const params = useParams()
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
          items={[params.sport as string, team.name]}
          paddingX={'spacings.lg'}
        />
        <TeamDetailsTop team={team} />
        <TeamDetailsNavigation team={team} />
      </Card>
    </>
  )
}
