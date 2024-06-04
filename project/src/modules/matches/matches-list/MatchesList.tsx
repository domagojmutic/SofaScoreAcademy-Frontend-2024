import { Match } from '@/model/Backend'
import MatchesListItem from './components/matches-item/MatchesItem'
import MatchesListItemSkeleton from './components/matches-item/MatchesItemSkeleton'
import { useSearchParams } from 'next/navigation'

interface MatchListProps {
  matches?: Match[]
}

export default function MatchesList({ matches }: MatchListProps) {
  const searchParams = useSearchParams()
  const eventId = searchParams.get('event')

  return (
    <>
      {!matches &&
        Array.from({ length: 5 }).map((_, i) => {
          return <MatchesListItemSkeleton key={i} />
        })}
      {matches &&
        matches.map(match => {
          return <MatchesListItem match={match} selected={eventId === `${match.id}`} key={match.id} />
        })}
    </>
  )
}