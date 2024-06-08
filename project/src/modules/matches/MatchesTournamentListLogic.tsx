'use client'
import { Match } from '@/model/Backend'
import useSWR from 'swr'
import { ReactNode, useEffect, useState } from 'react'
import { tournamentEvents } from '@/api/routes'
import { useParams } from 'next/navigation'
import React from 'react'

interface MatchListLogicProps {}

export default function MatchesCalendarList({ children }: MatchListLogicProps & { children: ReactNode }) {
  const [matchesByRounds, setMatchesByRounds] = useState<{ round: number; matches: Match[] }[]>([])
  const [localPage, setLocalPage] = useState<number>(0)
  const [span, setSpan] = useState<'next' | 'last'>('next')

  const params = useParams()

  const nextPage = () => {
    if (span === 'last' && localPage === 0) return setSpan('next')
    if (span === 'last') return setLocalPage(old => old - 1)
    if (span === 'next') setLocalPage(old => old + 1)
  }
  const prevPage = () => {
    if (span === 'next' && localPage === 0) return setSpan('last')
    if (span === 'last') return setLocalPage(old => old + 1)
    if (span === 'next') setLocalPage(old => old - 1)
  }

  const {
    data: matches,
    error,
    isLoading,
    isValidating,
    mutate,
  } = useSWR<Match[]>(tournamentEvents(params.tournamentId as string, span, localPage))

  useEffect(() => {
    mutate()
  }, [localPage, span])

  useEffect(() => {
    const rounds: number[] = []
    const tournaments: { round: number; matches: Match[] }[] = []
    matches?.forEach(match => {
      if (rounds.includes(match.round)) {
        const obj = tournaments.find(tournament => tournament.round === match.round)
        obj?.matches.push(match)
      } else {
        rounds.push(match.round)
        tournaments.push({ round: match.round, matches: [match] })
      }
    })
    setMatchesByRounds(tournaments)
  }, [matches])

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement<any>(child, {
        nextPage,
        prevPage,
        isLoading,
        isValidating,
        matches,
        matchesByRounds,
      })
    }
    return child
  })

  return <>{childrenWithProps}</>
}
