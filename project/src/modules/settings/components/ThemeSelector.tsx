'use client'
import { useThemeContext } from '@/context/ThemeContext'
import { Text } from '@kuma-ui/core'
import { Box, Flex } from '@kuma-ui/core'

export default function ThemeSelector() {
  const { isDark, setIsDark } = useThemeContext()

  return (
    <Box position="relative" width="100%" borderRadius="8px" bg="colors.surface.s2" padding="spacings.lg">
      <Text as="label" fontSize="fontSizes.xs" color="colors.primary" fontWeight="fontWeights.bold" lineHeight="16px">
        Themes
      </Text>
      <Flex justifyContent="space-between" alignItems="center" height="48px" marginTop="spacings.sm">
        <Text as="label" color="colors.onSurface.nLv1" fontSize="fontSizes.sm" lineHeight="20px">
          Light
        </Text>
        <Box
          as="input"
          type="radio"
          value="light"
          name="theme"
          width="24px"
          height="24px"
          onChange={() => setIsDark(false)}
          defaultChecked={!isDark}
        />
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" height="48px">
        <Text as="label" color="colors.onSurface.nLv1" fontSize="fontSizes.sm" lineHeight="20px">
          Dark
        </Text>
        <Box
          as="input"
          type="radio"
          value="dark"
          name="theme"
          width="24px"
          height="24px"
          onChange={() => setIsDark(true)}
          defaultChecked={isDark}
        />
      </Flex>
    </Box>
  )
}
