import { kebabCase } from 'lodash'

import { Text } from '@/components/Text'
import type { ThemeValues } from '@/components/theme'

type HeadingsProps = {
  children: React.ReactNode
  mt?: ThemeValues['marginTop']
}

export const H2 = ({ children, mt = '3xl' }: HeadingsProps) => {
  const id = `${kebabCase(children?.toString())}`

  return (
    <Text
      alignItems="center"
      as="h2"
      borderBottom="1px solid"
      borderBottomColor="neutral-30"
      display="flex"
      id={id}
      mt={mt}
      pb="sm"
      style={{ scrollMarginTop: 170 }}
      variant="h3"
    >
      <a className="text-inherit hover:underline" href={`#${id}`}>
        {children}
      </a>
    </Text>
  )
}

export const H3 = ({ children, mt = 'xxl' }: HeadingsProps) => {
  const id = `${kebabCase(children?.toString())}`

  return (
    <Text as="h3" id={id} mb="lg" mt={mt} style={{ scrollMarginTop: 170 }} variant="h4">
      <a className="text-inherit hover:underline" href={`#${id}`}>
        {children}
      </a>
    </Text>
  )
}

export const H4 = ({ children, mt = 'xl' }: HeadingsProps) => {
  return (
    <Text as="h4" id={`${kebabCase(children?.toString())}`} mb="md" mt={mt} variant="h5">
      {children}
    </Text>
  )
}

export const H5 = ({ children, mt = 'lg' }: HeadingsProps) => {
  return (
    <Text as="h5" id={`${kebabCase(children?.toString())}`} mb="sm" mt={mt} variant="h6">
      {children}
    </Text>
  )
}

export const H6 = ({ children, mt = 'lg' }: HeadingsProps) => {
  return (
    <Text id={`${kebabCase(children?.toString())}`} mb="sm" mt={mt} variant="h6">
      {children}
    </Text>
  )
}
