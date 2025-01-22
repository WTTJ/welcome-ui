import * as React from 'react'
import { Card } from 'welcome-ui/Card'
import { Text } from 'welcome-ui/Text'

const Example = () => {
  return (
    <Card maxWidth={400}>
      <Card.Cover
        src="https://m.media-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_SX1777_CR0,0,1777,994_AL_.jpg"
        w="100%"
      />
      <Card.Body>
        <Text as="h4" color="neutral-90" fontWeight="bold" mb="lg" mt={0}>
          The Jungle Book
        </Text>
        After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
        Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
        free-spirited bear Baloo.
      </Card.Body>
    </Card>
  )
}

export default Example
