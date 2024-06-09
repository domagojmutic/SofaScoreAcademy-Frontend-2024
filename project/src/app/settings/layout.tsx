import Breadcrumbs from '@/components/Breadcrumbs'
import { Box, Grid } from '@kuma-ui/core'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Box paddingX={[0, 0, 'spacings.xxl', 'spacings.xxl']}>
        <Breadcrumbs items={['Settings']} display={['none', 'none', 'Flex', 'Flex']} />
        <Grid gridTemplateColumns={['1fr', '1fr', '1fr 1fr', 'repeat(3, 1fr)']} gap="spacings.xxl">
          {children}
        </Grid>
      </Box>
    </>
  )
}
