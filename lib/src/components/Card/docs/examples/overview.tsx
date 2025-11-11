import { Card } from '@/components/Card'

const Example = () => {
  return (
    <Card className="max-w-2/3">
      <Card.Body>
        <p>
          A card doesn’t have padding by default. To add padding to a card, you should wrap your
          content in a <strong>Card.Body</strong> which has default <strong>padding</strong>.
        </p>
      </Card.Body>
    </Card>
  )
}

export default Example
