import { Box, BoxProps } from '@kuma-ui/core'
import { ReactNode } from 'react'

export default function Card({ children, ...rest }: { children: ReactNode } & BoxProps) {
  return (
    <Box bg="colors.surface.s1" boxShadow="0 1px 4px 0 rgba(0, 0, 0, 0.08)" borderRadius="16px" {...rest}>
      {children}
    </Box>
  )
}
