import { Text } from '@kuma-ui/core'
import { Box } from '@kuma-ui/core'

export default function LanguageSelector() {
  return (
    <Box position="relative" width="100%">
      <Text
        as="label"
        position="absolute"
        top="6px"
        left="16px"
        fontSize="fontSizes.xs"
        color="colors.primary"
        fontWeight="fontWeights.bold"
        lineHeight="16px"
      >
        Language
      </Text>
      <Box
        as="select"
        bg="colors.surface.s2"
        borderColor="colors.onSurface.nLv3"
        borderWidth="1px"
        borderStyle="solid"
        borderRadius="2px"
        width="100%"
        height="48px"
        value="en"
        paddingLeft="spacings.lg"
        paddingRight="spacings.sm"
        paddingTop="22px"
        paddingBottom="6px"
        fontSize="fontSizes.sm"
        color="colors.onSurface.nLv1"
        lineHeight="20px"
      >
        <option value="en">English</option>
      </Box>
    </Box>
  )
}
