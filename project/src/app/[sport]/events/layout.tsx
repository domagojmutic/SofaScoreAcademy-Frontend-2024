import { Box } from '@kuma-ui/core'

export default function EventsLayout({
  matchesList,
  matchDetails,
  children,
}: {
  matchesList: React.ReactNode
  matchDetails: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <Box>{matchesList}</Box>
      <Box>{matchDetails}</Box>
      {children}
    </>
  )
}
