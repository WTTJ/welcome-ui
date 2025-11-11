import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <Card className="max-w-2/3">
      <Card.Body>
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
  )
}

export default Example
