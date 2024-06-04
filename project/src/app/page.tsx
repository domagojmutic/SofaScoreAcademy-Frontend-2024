'use client'

import { useThemeContext } from '@/context/ThemeContext'
import { Box, Button } from '@kuma-ui/core'
import useSWR from 'swr'

export default function Home() {
  const { setIsDark } = useThemeContext()
  const { data, error } = useSWR('/api/sports')

  console.log(data, error)

  return (
    <>
      <Box as="main">
        <Box as="h1" color="colors.primary">
          This is your homepage
        </Box>
        <Button onClick={() => setIsDark(v => !v)}>Toggle theme</Button>
      </Box>
    </>
  )
}
