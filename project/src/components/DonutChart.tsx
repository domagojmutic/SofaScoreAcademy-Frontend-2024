import { Box, BoxProps, styled } from '@kuma-ui/core'

const CircleBackground = styled.circle`
  fill: t('colors.surface.s1');
`
const CircleRing = styled.circle`
  stroke: t('colors.secondary');
`
const CircleBar = styled.circle`
  stroke: t('colors.primary');
`

export default function DonutChart({ size, percent, ...rest }: { size: string | number; percent: number } & BoxProps) {
  return (
    <Box {...rest} position="relative" width={size} height={size}>
      <Box as="svg" width="100%" height="100%" viewBox="0 0 40 40">
        <CircleBackground cx="20" cy="20" r="15.91549430918954" />
        <CircleRing cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="7" />
        <CircleBar
          cx="20"
          cy="20"
          r="15.91549430918954"
          fill="transparent"
          strokeWidth="7"
          strokeDasharray={`${percent} ${100 - percent}`}
          strokeDashoffset="25"
        />
      </Box>
    </Box>
  )
}
