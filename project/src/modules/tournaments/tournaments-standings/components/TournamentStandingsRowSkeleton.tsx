import { Box } from '@kuma-ui/core'

export default function TournamentStandingsRowSkeleton() {
  return (
    <>
      <Box as="tr" height="48px">
        <Box as="td" width="24px" paddingX="spacings.sm">
          <Box
            as="span"
            display="block"
            width="24px"
            height="24px"
            borderRadius="50%"
            bg="colors.onSurface.nLv4"
            marginX="auto"
          />
        </Box>
        <Box as="td">
          <Box as="span" display="block" width="5em" height="14px" bg="colors.onSurface.nLv4" />
        </Box>
        <Box as="td">
          <Box as="span" display="block" width="1em" height="14px" bg="colors.onSurface.nLv4" marginX="auto" />
        </Box>
        <Box as="td">
          <Box as="span" display="block" width="1em" height="14px" bg="colors.onSurface.nLv4" marginX="auto" />
        </Box>
        <Box as="td">
          <Box as="span" display="block" width="1em" height="14px" bg="colors.onSurface.nLv4" marginX="auto" />
        </Box>
        <Box as="td">
          <Box as="span" display="block" width="1em" height="14px" bg="colors.onSurface.nLv4" marginX="auto" />
        </Box>
        <Box as="td">
          <Box as="span" display="block" width="2.5em" height="14px" bg="colors.onSurface.nLv4" marginX="auto" />
        </Box>
        <Box as="td">
          <Box as="span" display="block" width="1.5em" height="14px" bg="colors.onSurface.nLv4" marginX="auto" />
        </Box>
      </Box>
    </>
  )
}
