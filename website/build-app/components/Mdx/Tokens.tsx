import { snakeCase } from 'lodash'

import { Text } from '@/Text'
import { Card } from '@/Card'
import { Flex } from '@/Flex'

export const Tokens = ({ children }: { children: React.ReactNode[] }) => {
  const tokenName = children
    .filter(child => child?.props?.children?.startsWith('Token Group'))[0]
    ?.props?.children?.replace('Token Group ', '')

  return (
    <Flex direction="column" gap="md">
      {children.map((child, index) => {
        const key = `${snakeCase(tokenName)}-${index}`

        // remove wrong child
        if (child === ':' || child?.type === 'br' || child === '\n') return
        // remove Token Group from tokens title
        if (child?.props?.children?.startsWith('Token Group')) {
          return (
            <Text key={key} mx="lg" variant="h4">
              {child?.props?.children?.replace('Token Group ', '')}
            </Text>
          )
        }

        return (
          <Card key={key}>
            <Card.Body>{child}</Card.Body>
          </Card>
        )
      })}
    </Flex>
  )
}
