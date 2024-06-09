'use client'
import { Text } from '@kuma-ui/core'
import { Box, Flex } from '@kuma-ui/core'

export default function ThemeSelector() {

  return (
    <Box position="relative" width="100%" borderRadius="8px" bg="colors.surface.s2" padding="spacings.lg">
      <Text as="label" fontSize="fontSizes.xs" color="colors.primary" fontWeight="fontWeights.bold" lineHeight="16px">
        Date Format
      </Text>
      <Flex justifyContent="space-between" alignItems="center" height="48px" marginTop="spacings.sm">
        <Text as="label" color="colors.onSurface.nLv1" fontSize="fontSizes.sm" lineHeight="20px">
          DD / MM / YYYY
        </Text>
        <Box
          as="input"
          type="radio"
          value="dayFirst"
          name="dateFormat"
          width="24px"
          height="24px"
          onChange={() => {}}
          defaultChecked={true}
        />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" height="48px">
        <Text as="label" color="colors.onSurface.nLv1" fontSize="fontSizes.sm" lineHeight="20px">
          YYYY / MM / DD
        </Text>
        <Box
          as="input"
          type="radio"
          value="yearFirst"
          name="dateFormat"
          width="24px"
          height="24px"
          onChange={() => {}}
          defaultChecked={false}
          disabled={true}
        />
      </Flex>
    </Box>
  )
}
