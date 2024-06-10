'use client'
import { Box, Text } from '@kuma-ui/core'
import Link from 'next/link'
import Separator from '@/components/Separator'
import { getDateString, getDayName, isSameDay } from '@/utils/dateUtils'
import { useParams } from 'next/navigation'

interface MatchesTimeSlotProps {
  date: Date
  selected: boolean
}

export default function MatchesTimeSlot({ date, selected }: MatchesTimeSlotProps) {
  const today = new Date()
  const params = useParams()
  return (
    <Box
      as={Link}
      href={'/' + params.sport + '/events/' + getDateString(date)}
      width="56px"
      paddingX="4px"
      paddingTop="8px"
    >
      <Text
        fontStretch="condensed"
        color="colors.surface.s1"
        fontSize="fontSizes.xs"
        lineHeight="16px"
        textAlign="center"
      >
        {isSameDay(today, date) ? 'TODAY' : getDayName(date.getDay())}
      </Text>
      <Text
        fontStretch="condensed"
        color="colors.surface.s1"
        fontSize="fontSizes.xs"
        lineHeight="16px"
        textAlign="center"
      >
        {date.toLocaleDateString('hr', { month: '2-digit', day: '2-digit' })}
      </Text>
      {selected && (
        <Separator
          direction="horizontal"
          thickness="4px"
          length="48px"
          color="colors.surface.s1"
          mt="4px"
          borderRadius="2px 2px 0 0"
        />
      )}
    </Box>
  )
}
