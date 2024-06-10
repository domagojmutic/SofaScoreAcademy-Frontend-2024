import { Box, BoxProps } from '@kuma-ui/core'

export default function Separator({
  direction,
  length,
  thickness,
  color,
  ...rest
}: {
  direction: 'h' | 'v' | 'horizontal' | 'vertical'
  length: number | string
  thickness: number | string
  color: string
} & BoxProps) {
  return (
    <>
      {direction === 'h' || direction === 'horizontal' ? (
        <Box bg={color} width={length} height={thickness} {...rest} />
      ) : (
        <Box bg={color} width={thickness} height={length} {...rest} />
      )}
    </>
  )
}
