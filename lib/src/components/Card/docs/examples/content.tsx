import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

const Example = () => {
  const url =
    'https://m.media-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_SX1777_CR0,0,1777,994_AL_.jpg'

  return (
    <Card className="max-w-1/2">
      <Card.Cover className="w-full" src={url} />
      <Card.Body>
        <Text as="h4" className="font-bold text-neutral-90 mb-lg mt-0">
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
