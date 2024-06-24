import { WuiProps } from '@welcome-ui/system'
import { Text } from '@welcome-ui/text'
import { kebabCase } from 'lodash'

type HeadingsProps = {
  children: React.ReactNode
  mt?: WuiProps['marginTop']
}

export const H2 = ({ children, mt = '3xl' }: HeadingsProps) => {
  return (
    <Text
      alignItems="center"
      as="h2"
      borderBottom="1px solid"
      borderBottomColor="border"
      display="flex"
      id={`${kebabCase(children?.toString())}`}
      mt={mt}
      pb="sm"
      style={{ scrollMarginTop: 170 }}
      variant="h3"
    >
      {children}
    </Text>
  )
}

export const H3 = ({ children, mt = 'xxl' }: HeadingsProps) => {
  return (
    <Text
      as="h3"
      id={`${kebabCase(children?.toString())}`}
      mb="lg"
      mt={mt}
      style={{ scrollMarginTop: 170 }}
      variant="h4"
    >
      {children}
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
