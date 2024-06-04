import { Box, Grid } from '@kuma-ui/core'

export default function Layout({
  breadcrumbs,
  tournamentsList,
  children,
}: {
  breadcrumbs: React.ReactNode
  tournamentsList: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <Box paddingX="spacings.xxl">
        <Box>{breadcrumbs}</Box>
        <Grid gridTemplateColumns="repeat(3, 1fr)" gap="spacings.xxl">
          <Box>{tournamentsList}</Box>
          {children}
        </Grid>
      </Box>
    </>
  )
}
