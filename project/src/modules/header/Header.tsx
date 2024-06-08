import { Box } from '@kuma-ui/core'
import Navigation from './components/Navigation'
import TopHeader from './components/TopHeader'
import { Sport } from '@/model/Backend'

interface HeaderProps {
  sports: Sport[],
}

export default function Header(props: HeaderProps) {
  return (
    <Box as="header">
      <TopHeader />
      <Navigation sports={props.sports} />
    </Box>
  )
}
