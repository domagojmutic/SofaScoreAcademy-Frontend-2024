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
      <Box paddingX={[0, 0, 'spacings.xxl', 'spacings.xxl']}>
        <Box>{breadcrumbs}</Box>
        <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr', 'repeat(3, 1fr)']} gap="spacings.xxl">
          <Box display={['none', 'none', 'none', 'block']}>{tournamentsList}</Box>
          {children}
        </Grid>
      </Box>
    </>
  )
}
