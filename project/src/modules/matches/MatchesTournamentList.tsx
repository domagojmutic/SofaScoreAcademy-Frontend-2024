'use client'
import { Match, Tournament } from '@/model/Backend'
import useSWR from 'swr'
import Card from '@/components/Card'
import MatchesTimeHeader from './matches-list/components/matches-time-header/MatchesTimeHeader'
import MatchesList from './matches-list/MatchesList'
import { Fragment, useEffect, useState } from 'react'
import MatchesTournamentHeader from './matches-list/components/MatchesTournamentHeader'
import Separator from '@/components/Separator'
import { events, tournamentEvents } from '@/api/routes'
import MatchesTournamentHeaderSkeleton from './matches-list/components/MatchesTournamentHeaderSkeleton'
import { Box, Flex, Text } from '@kuma-ui/core'
import LoadingSpinner from '@/components/LoadingSpinner'
import { useParams } from 'next/navigation'
import MatchesPagesHeader from './matches-list/components/MatchesPagesHeader'

interface MatchListProps {}

export default function MatchesCalendarList({}: MatchListProps) {
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

  return (
    <>
      <Card overflow="hidden" paddingTop="spacings.md" paddingBottom="spacings.lg" position="relative">
        <MatchesPagesHeader nextPage={nextPage} prevPage={prevPage} />
        {!isLoading && isValidating && (
          <>
            <Box position="absolute" left="50%" transform="translateX(-50%)" paddingTop="spacings.sm">
              <LoadingSpinner size="40px" />
            </Box>
            {(!matches || matches!.length <= 0) && (
              <Box paddingTop="spacings.md">
                <Text color="colors.onSurface.nLv1" fontWeight="bold">
                  &nbsp;
                </Text>
              </Box>
            )}
          </>
        )}

        {!isLoading &&
          matchesByRounds.map(({ round, matches }, index) => {
            return (
              <Fragment key={round}>
                <Box paddingX="spacings.lg" paddingY="spacings.sm" paddingTop={index !== 0 ? 'spacings.xxl' : ''}>
                  <Text
                    fontSize="fontSizes.xs"
                    fontWeight="bold"
                    lineHeight="16px"
                    color="colors.onSurface.nLv1"
                    textAlign="left"
                  >
                    Round {round}
                  </Text>
                </Box>
                <MatchesList matches={matches} />
              </Fragment>
            )
          })}

        {(isLoading || (matches && matches.length > 0 && matchesByRounds.length <= 0)) && (
          <>
            <Box marginX="spacings.lg" marginY="spacings.sm" width="3em" height="14px" bg="black" opacity="0.25" />
            <MatchesList />
          </>
        )}

        {!isLoading && !isValidating && matches && matches.length <= 0 && (
          <Flex justify="center" alignItems="center" paddingTop="spacings.md">
            <Text color="colors.onSurface.nLv1" fontWeight="bold">
              No Events
            </Text>
          </Flex>
        )}
      </Card>
    </>
  )
}
