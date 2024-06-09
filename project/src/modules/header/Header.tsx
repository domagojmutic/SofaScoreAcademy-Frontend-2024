import { Box } from '@kuma-ui/core'
import Navigation from './components/Navigation'
import TopHeader from './components/TopHeader'
import { Sport } from '@/model/Backend'

interface HeaderProps {
  sports: Sport[]
}

export default function Header(props: HeaderProps) {
  return (
    <Box as="header" position={['sticky', 'sticky', 'relative', 'relative']} top={0} zIndex={1}>
      <TopHeader />
      <Navigation sports={props.sports} />
    </Box>
  )
}
