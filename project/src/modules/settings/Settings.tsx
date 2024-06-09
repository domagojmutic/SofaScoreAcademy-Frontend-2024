import Card from '@/components/Card'
import { Text } from '@kuma-ui/core'
import { Box, Flex } from '@kuma-ui/core'
import LanguageSelector from './components/LanguageSelector'
import ThemeSelector from './components/ThemeSelector'
import DateFormatSelector from './components/DateFormatSelector'
import About from './components/About'

export default function Settings() {
  return (
    <Card
      paddingTop="spacings.lg"
      paddingBottom={['48px', '48px', 'spacings.lg', 'spacings.lg']}
      borderRadius={[0, 0, 16, 16]}
    >
      <Flex
        height="48px"
        bg="colors.surface.s1"
        paddingX="spacings.lg"
        alignItems="center"
        position={['sticky', 'sticky', 'relative', 'relative']}
        top={[48, 48, 0, 0]}
        zIndex={1}
      >
        <Text as="h1" fontSize={'fontSizes.lg'}>
          Settings
        </Text>
      </Flex>
      <Flex flexDirection="column" gap="16px" paddingX="spacings.sm">
        <LanguageSelector />
        <ThemeSelector />
        <DateFormatSelector />
        <About />
      </Flex>
    </Card>
  )
}
