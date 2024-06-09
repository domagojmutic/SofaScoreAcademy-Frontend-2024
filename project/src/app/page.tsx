import { useThemeContext } from '@/context/ThemeContext'
import { Box, Button } from '@kuma-ui/core'

export default function Home() {
  // const { setIsDark } = useThemeContext()
  
  return (
    <>
      <Box as="main">
        <Box as="h1" color="colors.primary">
          This is your homepage
        </Box>
        {/* <Button onClick={() => setIsDark(v => !v)}>Toggle theme</Button> */}
      </Box>
    </>
  )
}
