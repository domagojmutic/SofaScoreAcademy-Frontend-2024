import { Button, Flex, Image } from '@kuma-ui/core'
import { addToDate } from '@/utils/dateUtils'
import MatchesTimeSlot from './components/MatchesTimeSlot'
import { useState } from 'react'

interface MatchesTimeHeaderProps {
  date: Date
  nextDate: () => void
  prevDate: () => void
}

export default function MatchesTimeHeader({ date, nextDate, prevDate }: MatchesTimeHeaderProps) {
  const [selectedOffset, setSelectedOffset] = useState(0)
  const dateOffsets = [-3, -2, -1, 0, 1, 2, 3]

  return (
    <Flex
      bg="colors.primaryVariant"
      height="48px"
      justifyContent="center"
      boxShadow="0 1px 4px 0 rgba(0, 0, 0, 0.08)"
      position="relative"
    >
      <Button
        width="32px"
        height="32px"
        padding="4px"
        position="absolute"
        top="8px"
        left="8px"
        bg="colors.surface.s1"
        border="none"
        borderRadius="2px"
        onClick={() => {
          prevDate()
          setSelectedOffset(old => old - 1)
        }}
      >
        <Image src="/ic_chevron_right.svg" transform="rotate(180deg)" />
      </Button>
      {dateOffsets.map(offset => {
        const dateCell = addToDate(date, { days: offset })
        return <MatchesTimeSlot date={dateCell} selected={offset === selectedOffset} key={dateCell.getTime()} />
      })}
      <Button
        width="32px"
        height="32px"
        padding="4px"
        position="absolute"
        top="8px"
        right="8px"
        bg="colors.surface.s1"
        border="none"
        borderRadius="2px"
        onClick={() => {
          nextDate()
          setSelectedOffset(old => old + 1)
        }}
      >
        <Image src="/ic_chevron_right.svg" />
      </Button>
    </Flex>
  )
}
