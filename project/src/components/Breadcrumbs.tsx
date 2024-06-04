import { Flex, Image, Text, FlexProps } from '@kuma-ui/core'
import { Fragment } from 'react'

interface BreadcrumbsProps {
  items: string[]
}

export default function Breadcrumbs({ items, ...rest }: BreadcrumbsProps & FlexProps) {
  return (
    <Flex height="48px" alignItems="center" {...rest}>
      {items.map((item, index) => {
        if (index === items.length) return <Text key={item}>{item}</Text>
        return (
          <Fragment key={item}>
            <Text
              fontSize="fontSizes.xs"
              lineHeight="16px"
              fontStretch="condensed"
              color={index === items.length - 1 ? 'colors.onSurface.nLv2' : 'colors.primary'}
            >
              {item}
            </Text>
            {index !== items.length - 1 && <Image src="/ic_pointer_right.svg" alt=">" width="24px" height="24px" />}
          </Fragment>
        )
      })}
    </Flex>
  )
}
