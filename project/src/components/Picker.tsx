'use client'
import { Box, BoxProps, Flex, Image, Text } from '@kuma-ui/core'
import { useState } from 'react'

interface PickerProps {
  value: string | number
  values: { value: string | number; name: string; img: string }[]
}

export default function Picker({ value, values, bg, ...rest }: PickerProps & BoxProps) {
  const [selectedValue, setSelectedValue] = useState(values.find(val => val.value === value))
  const [optionsOpen, setOptionsOpen] = useState(false)

  return (
    <>
      <Box position="relative" display="inline-block">
        <Flex
          bg={bg}
          opacity={1}
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          overflow="hidden"
          onClick={() => setOptionsOpen(old => !old)}
          {...rest}
        >
          <Item {...selectedValue} {...rest} />
          <Image src="/ic_chevron_down.svg" />
        </Flex>
        <Box
          display={optionsOpen ? 'block' : 'none'}
          width="100%"
          position="absolute"
          bg={bg}
          opacity={1}
          boxShadow="0 1px 4px 0 rgba(0, 0, 0, 0.08)"
          transform={['translateY(-2px)', 'translateY(-2px)', 'translateY(-5px)', 'translateY(-5px)']}
        >
          {values.map(val => (
            <Item {...val} setValue={setSelectedValue} setOpened={setOptionsOpen} key={val.value} />
          ))}
        </Box>
      </Box>
    </>
  )
}

function Item({
  value,
  name,
  img,
  setValue,
  setOpened,
  bg,
  ...rest
}: {
  value?: string | number
  name?: string
  img?: string
  setValue?: (val: any) => void
  setOpened?: (val: boolean) => void
} & BoxProps) {
  return (
    <Flex
      gap="spacings.sm"
      bg={bg}
      paddingX="spacings.sm"
      paddingY={[4, 4, 'spacings.md', 'spacings.md']}
      cursor="pointer"
      opacity={1}
      onClick={() => {
        if (setValue) {
          setValue({ value, name, img })
        }
        if (setOpened) {
          setOpened(false)
        }
      }}
      _hover={{ bg: 'colors.surface.s2' }}
    >
      <Image src={img} width="16px" height="16px" />
      <Text fontSize="fontSizes.xs" lineHeight="16px" color="colors.onSurface.nLv1">
        {name}
      </Text>
    </Flex>
  )
}
