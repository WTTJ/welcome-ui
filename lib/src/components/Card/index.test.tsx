import { screen } from '@testing-library/react'

import { Card } from '@/components/Card'

import { render } from '@tests'

const content = 'Jungle'
const imageSrc = 'https://example.com/image.jpg'

describe('<Card>', () => {
  it('should render correctly', () => {
    const { container } = render(<Card>{content}</Card>)

    expect(container).toHaveTextContent(content)
  })

  it('should render with Card.Body', () => {
    render(
      <Card data-testid="card">
        <Card.Body data-testid="card-body">{content}</Card.Body>
      </Card>
    )

    const card = screen.getByTestId('card')
    const cardBody = screen.getByTestId('card-body')

    expect(card).toBeInTheDocument()
    expect(cardBody).toBeInTheDocument()
    expect(cardBody).toHaveTextContent(content)
  })

  it('should render with Card.Cover', () => {
    render(
      <Card data-testid="card">
        <Card.Cover alt="" data-testid="card-cover" src={imageSrc} />
      </Card>
    )

    const card = screen.getByTestId('card')
    const cardCover = screen.getByTestId('card-cover')
    const image = cardCover.querySelector('img')

    expect(card).toBeInTheDocument()
    expect(cardCover).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', imageSrc)
  })

  it('should render with both Card.Cover and Card.Body', () => {
    render(
      <Card data-testid="card">
        <Card.Cover alt="" data-testid="card-cover" src={imageSrc} />
        <Card.Body data-testid="card-body">{content}</Card.Body>
      </Card>
    )

    const card = screen.getByTestId('card')
    const cardCover = screen.getByTestId('card-cover')
    const cardBody = screen.getByTestId('card-body')

    expect(card).toBeInTheDocument()
    expect(cardCover).toBeInTheDocument()
    expect(cardBody).toBeInTheDocument()
    expect(cardBody).toHaveTextContent(content)
  })
})
