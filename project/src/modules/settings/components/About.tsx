'use client'
import Separator from '@/components/Separator'
import { useThemeContext } from '@/context/ThemeContext'
import { Image, Text } from '@kuma-ui/core'
import { Box, Flex } from '@kuma-ui/core'
import Link from 'next/link'

export default function ThemeSelector() {
  const { isDark, setIsDark } = useThemeContext()

  return (
    <Flex
      flexDirection="column"
      position="relative"
      width="100%"
      borderRadius="8px"
      bg="colors.surface.s2"
      padding="spacings.lg"
      gap="spacings.lg"
    >
      <Text
        as="h1"
        fontSize="fontSizes.lg"
        color="colors.onSurface.nLv1"
        fontWeight="fontWeights.bold"
        lineHeight="28px"
      >
        About
      </Text>
      <Box>
        <Text
          as="h2"
          fontSize="fontSizes.md"
          color="colors.onSurface.nLv1"
          fontWeight="fontWeights.bold"
          lineHeight="20px"
        >
          Sofascore Frontend Academy
        </Text>
        <Text fontSize="fontSizes.sm" color="colors.onSurface.nLv1" lineHeight="20px">
          Class 2024
        </Text>
      </Box>
      <Separator color="colors.onSurface.nLv4" direction="horizontal" length="100%" thickness="1px" />
      <Box>
        <Text fontSize="fontSizes.xs" color="colors.onSurface.nLv2" fontWeight="fontWeights.bold" lineHeight="16px">
          App Name
        </Text>
        <Text fontSize="fontSizes.sm" color="colors.onSurface.nLv1" lineHeight="20px">
          Mini Sofascore App
        </Text>
      </Box>
      <Box>
        <Text fontSize="fontSizes.xs" color="colors.onSurface.nLv2" fontWeight="fontWeights.bold" lineHeight="16px">
          API Credit
        </Text>
        <Text fontSize="fontSizes.sm" color="colors.onSurface.nLv1" lineHeight="20px">
          Sofascore
        </Text>
      </Box>
      <Box>
        <Text fontSize="fontSizes.xs" color="colors.onSurface.nLv2" fontWeight="fontWeights.bold" lineHeight="16px">
          Developer
        </Text>
        <Text fontSize="fontSizes.sm" color="colors.onSurface.nLv1" lineHeight="20px">
          Domagoj Mutić
        </Text>
      </Box>
      <Separator color="colors.onSurface.nLv4" direction="horizontal" length="100%" thickness="1px" />
      <Flex
        as={Link}
        href="https://www.sofascore.com/"
        justifyContent="center"
        alignItems="center"
        marginBottom="spacings.lg"
      >
        <Image
          src="/sofascore_lockup.svg"
          alt="SofaScore"
          width="132px"
          height="20px"
          margin="auto"
          filter="brightness(0) saturate(100%) invert(20%) sepia(85%) saturate(3275%) hue-rotate(233deg) brightness(99%) contrast(94%)"
        />
      </Flex>
    </Flex>
  )
}
