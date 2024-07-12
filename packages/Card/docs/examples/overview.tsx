import * as React from 'react'
import { Card } from '@welcome-ui/card'

const Example = () => {
  return (
    <Card maxWidth={400}>
      <Card.Body>
        A card doesn’t have padding by default. To add padding to a card, you should wrap your
        content in a <strong>Card.Body</strong> which has default <strong>padding</strong> of{' '}
        <strong>lg</strong>.
      </Card.Body>
    </Card>
  )
}

export default Example
