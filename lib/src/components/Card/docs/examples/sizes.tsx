import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <Card className="max-w-2/3" size="sm">
        <Card.Header onClose={() => {}}>
          <Icon name="book-alt" />
          The Jungle Book (sm)
        </Card.Header>
        <Card.Body metadata="1894 ‧ Adventure/Drama">
          After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
          Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
          free-spirited bear Baloo.
        </Card.Body>
        <Card.Footer>
          <Button size="md" variant="primary">
            Learn More
          </Button>
          <Button size="md" variant="secondary">
            Bookmark
          </Button>
          <Button className="ml-auto" variant="tertiary">
            <Icon name="share" />
          </Button>
        </Card.Footer>
      </Card>

      <Card className="max-w-2/3" size="md">
        <Card.Header onClose={() => {}}>
          <Icon name="book-alt" />
          The Jungle Book (md)
        </Card.Header>
        <Card.Body metadata="1894 ‧ Adventure/Drama">
          After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
          Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
          free-spirited bear Baloo.
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Learn More</Button>
          <Button variant="secondary">Bookmark</Button>
          <Button className="ml-auto" variant="tertiary">
            <Icon name="share" />
          </Button>
        </Card.Footer>
      </Card>

      <Card className="max-w-2/3" size="lg">
        <Card.Header onClose={() => {}}>
          <Icon name="book-alt" />
          The Jungle Book (lg)
        </Card.Header>
        <Card.Body metadata="1894 ‧ Adventure/Drama">
          After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
          Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
          free-spirited bear Baloo.
        </Card.Body>
        <Card.Footer>
          <Button variant="primary">Learn More</Button>
          <Button variant="secondary">Bookmark</Button>
          <Button className="ml-auto" variant="tertiary">
            <Icon name="share" />
          </Button>
        </Card.Footer>
      </Card>
    </>
  )
}

export default Example
