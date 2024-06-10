'use client'
import { Match, Tournament } from '@/model/Backend'
import useSWR from 'swr'
import { ReactNode, useEffect, useState } from 'react'
import { events } from '@/api/routes'
import { addToDate, isSameDay } from '@/utils/dateUtils'
import React from 'react'

interface MatchListProps {
  sport: string
  date: Date
  matchesServer?: Match[]
}

export default function MatchesCalendarListLogic({
  children,
  sport,
  date,
  matchesServer,
}: { children: ReactNode } & MatchListProps) {
  const [matchesByLeague, setMatchesByLeague] = useState<{ tournament: Tournament; matches: Match[] }[]>([])
  const [localDate, setLocalDate] = useState<Date>(new Date(date))

  const nextDate = () => {
    setLocalDate(addToDate(localDate, { days: 1 }))
  }
  const prevDate = () => {
    setLocalDate(addToDate(localDate, { days: -1 }))
  }

  const {
    data: matches,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<Match[]>(events(sport, localDate), {
    fallbackData: isSameDay(localDate, date) ? matchesServer : undefined,
    suspense: true,
  })

  useEffect(() => {
    mutate()
  }, [localDate])

  useEffect(() => {
    const tournamentIds: number[] = []
    const tournaments: { tournament: Tournament; matches: Match[] }[] = []
    matches?.forEach(match => {
      if (tournamentIds.includes(match.tournament.id)) {
        const obj = tournaments.find(tournament => tournament.tournament.id === match.tournament.id)
        obj?.matches.push(match)
      } else {
        tournamentIds.push(match.tournament.id)
        tournaments.push({ tournament: match.tournament, matches: [match] })
      }
    })
    setMatchesByLeague(tournaments)
  }, [matches])

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement<any>(child, {
        nextDate,
        prevDate,
        isLoading,
        isValidating,
        matches,
        matchesByLeague,
        date,
        localDate,
      })
    }
    return child
  })

  return <>{childrenWithProps}</>
}
