'use client'
import { Match } from '@/model/Backend'
import MatchesListItem from './components/matches-item/MatchesItem'
import MatchesListItemSkeleton from './components/matches-item/MatchesItemSkeleton'
import { useSearchParams } from 'next/navigation'

interface MatchListProps {
  matches?: Match[]
  details?: 'status' | 'time'
  clickable?: boolean
}

export default function MatchesList({ matches, details, clickable = true }: MatchListProps) {
  const searchParams = useSearchParams()
  const eventId = searchParams.get('event')

  return (
    <>
      {!matches &&
        Array.from({ length: 8 }).map((_, i) => {
          return <MatchesListItemSkeleton key={i} />
        })}
      {matches &&
        matches.map(match => {
          return (
            <MatchesListItem
              match={match}
              selected={eventId === `${match.id}`}
              details={details}
              clickable={clickable}
              key={match.id}
            />
          )
        })}
    </>
  )
}
