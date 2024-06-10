'use client'
import { teamTournaments, tournament, tournaments } from '@/api/routes'
import Picker from '@/components/Picker'
import { Tournament } from '@/model/Backend'
import { useParams } from 'next/navigation'
import useSWR from 'swr'

interface TournamentStandingsPickerProps {
  selectedTournamentId: string | number
}

export default function TournamentStandingsPicker({ selectedTournamentId }: TournamentStandingsPickerProps) {
  const params = useParams()
  const { data: selectedTournament } = useSWR<Tournament>(tournament(selectedTournamentId))
  const { data: tournamentsData } = useSWR<Tournament[]>(
    params.teamId ? teamTournaments(params.teamId as string) : tournaments(params.sport as string)
  )
  return (
    <>
      {tournamentsData && selectedTournament && (
        <Picker
          value={selectedTournament.id}
          values={tournamentsData.map(tournament => {
            return { value: tournament.id, name: tournament.name, img: `/api/tournament/${tournament.id}/image` }
          })}
          boxShadow="0 1px 4px 0 rgba(0, 0, 0, 0.08)"
          borderRadius="8px"
          bg={'colors.surface.s2'}
        />
      )}
    </>
  )
}
