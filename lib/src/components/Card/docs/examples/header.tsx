import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <Card className="max-w-2/3">
        <Card.Header>
          <Icon name="book-alt" />
          The Jungle Book
        </Card.Header>
        <Card.Body>
          After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
          Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
          free-spirited bear Baloo.
        </Card.Body>
      </Card>

      <Card className="max-w-2/3">
        <Card.Header onClose={() => alert('Closing card')}>
          <Icon name="book-alt" />
          The Jungle Book
        </Card.Header>
        <Card.Body>
          After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
          Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
          free-spirited bear Baloo.
        </Card.Body>
      </Card>

      <Card className="max-w-2/3">
        <Card.Header disabled onClose={() => alert('Closing card')} />
        <Card.Body>
          <h3 className="flex items-center gap-4">
            <Icon name="book-alt" size="lg" />
            The Jungle Book (disabled close)
          </h3>
          After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
          Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
          free-spirited bear Baloo.
        </Card.Body>
      </Card>
    </>
  )
}

export default Example
