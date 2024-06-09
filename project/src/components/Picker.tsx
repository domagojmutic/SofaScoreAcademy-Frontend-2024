'use client'
import { Box, BoxProps, Flex, Image, Text } from '@kuma-ui/core'
import { useState } from 'react'

interface PickerProps {
  value: string | number
  values: { value: string | number; name: string; img: string }[]
}

export default function Picker({ value, values, ...rest }: PickerProps & BoxProps) {
  const [selectedValue, setSelectedValue] = useState(values.find(val => val.value === value))
  const [optionsOpen, setOptionsOpen] = useState(false)

  return (
    <>
      <Box position="relative" display="inline-block">
        <Flex
          bg="colors.surface.s1"
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          overflow="hidden"
          onClick={() => setOptionsOpen(old => !old)}
          {...rest}
        >
          <Item {...selectedValue} />
          <Image src="/ic_chevron_down.svg" />
        </Flex>
        <Box
          display={optionsOpen ? 'block' : 'none'}
          width="100%"
          position="absolute"
          bg="colors.surface.s1"
          boxShadow="0 1px 4px 0 rgba(0, 0, 0, 0.08)"
          transform="translateY(-5px)"
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
}: {
  value?: string | number
  name?: string
  img?: string
  setValue?: (val: any) => void
  setOpened?: (val: boolean) => void
}) {
  return (
    <Flex
      gap="spacings.sm"
      bg="colors.surface.s1"
      paddingX="spacings.sm"
      paddingY="spacings.md"
      cursor="pointer"
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
