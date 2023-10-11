import { Text } from '@welcome-ui/text'
import { kebabCase } from 'lodash'

interface HeadingsProps {
  children: React.ReactNode
}

export const H2 = ({ children }: HeadingsProps) => {
  return (
    <Text as="h2" id={`${kebabCase(children?.toString())}`} variant="h3">
      {children}
    </Text>
  )
}

export const H3 = ({ children }: HeadingsProps) => {
  return (
    <Text as="h3" id={`${kebabCase(children?.toString())}`} variant="h4">
      {children}
    </Text>
  )
}

export const H4 = ({ children }: HeadingsProps) => {
  return (
    <Text as="h4" id={`${kebabCase(children?.toString())}`} variant="h5">
      {children}
    </Text>
  )
}
