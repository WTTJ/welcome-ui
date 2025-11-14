import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <Card
        as="a"
        className="max-w-2/3"
        href="https://www.welcometothejungle.com"
        rel="noopener nofollow"
        target="_blank"
      >
        <Card.Body>
          <h3 className="flex items-center gap-4">
            <Icon name="book-alt" size="lg" />
            The Jungle Book
          </h3>
          <p>
            After a threat from the tiger Shere Khan forces him to flee the jungle, a man-cub named
            Mowgli embarks on a journey of self discovery with the help of panther Bagheera and
            free-spirited bear Baloo.
          </p>
        </Card.Body>
      </Card>
    </>
  )
}

export default Example
