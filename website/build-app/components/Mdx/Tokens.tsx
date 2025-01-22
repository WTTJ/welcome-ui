/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Text } from '@welcome-ui/text'
import { Card } from '@welcome-ui/card'
import { Flex } from '@welcome-ui/flex'
import { snakeCase } from 'lodash'

export const Tokens = ({ children }: { children: React.ReactNode[] }) => {
  const tokenName = children
    //@ts-ignore
    .filter(child => child?.props?.children?.startsWith('Token Group'))[0]
    //@ts-ignore
    ?.props?.children?.replace('Token Group ', '')

  return (
    <Flex direction="column" gap="md">
      {children.map((child, index) => {
        const key = `${snakeCase(tokenName)}-${index}`

        // remove wrong child
        //@ts-ignore
        if (child === ':' || child?.type === 'br' || child === '\n') return
        // remove Token Group from tokens title
        //@ts-ignore
        if (child?.props?.children?.startsWith('Token Group')) {
          return (
            <Text key={key} mx="lg" variant="h4">
              {/* @ts-ignore */}
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
