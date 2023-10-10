import { Text } from '@welcome-ui/text'
import { kebabCase } from 'lodash'

interface HeadingsProps {
  children: React.ReactNode
}

export const H2 = ({ children }: HeadingsProps) => {
  return (
    <Text id={`${kebabCase(children?.toString())}`} my="3xl" variant="h2">
      {children}
    </Text>
  )
}

export const H3 = ({ children }: HeadingsProps) => {
  return (
    <Text id={`${kebabCase(children?.toString())}`} my="xl" variant="h3">
      {children}
    </Text>
  )
}

export const H4 = ({ children }: HeadingsProps) => {
  return (
    <Text id={`${kebabCase(children?.toString())}`} my="lg" variant="h4">
      {children}
    </Text>
  )
}
