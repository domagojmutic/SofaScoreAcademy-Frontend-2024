import { Button, Flex, Image, Text } from '@kuma-ui/core'

interface MatchesTimeHeaderProps {
  nextPage: () => void
  prevPage: () => void
}

export default function MatchesPagesHeader({ nextPage, prevPage }: MatchesTimeHeaderProps) {
  return (
    <Flex height="48px" justifyContent="center" alignItems="center" position="relative">
      <Button
        width="56px"
        height="40px"
        position="absolute"
        top="4px"
        left="spacings.lg"
        bg="colors.surface.s1"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="colors.primary"
        borderRadius="2px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          prevPage()
        }}
      >
        <Image src="/ic_chevron_right.svg" transform="rotate(180deg)" />
      </Button>
      <Text textAlign="center" fontSize="fontSizes.md" fontWeight="bold" lineHeight="20px">
        Matches
      </Text>
      <Button
        width="56px"
        height="40px"
        position="absolute"
        top="4px"
        right="spacings.lg"
        bg="colors.surface.s1"
        borderWidth="2px"
        borderStyle="solid"
        borderColor="colors.primary"
        borderRadius="2px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => {
          nextPage()
        }}
      >
        <Image src="/ic_chevron_right.svg" />
      </Button>
    </Flex>
  )
}
