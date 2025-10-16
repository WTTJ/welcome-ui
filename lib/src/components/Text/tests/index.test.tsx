import { Text } from '@/components/Text'

import { render } from '@tests'
const content = 'Jungle'
const longContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh. Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec efficitur porta elit ac malesuada.'

describe('<Text>', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(<Text data-testid="text">{content}</Text>)

    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a p element
    expect(container.querySelector('p')).toBeInTheDocument()
    expect(text.classList.toString().includes('variant-md')).toBe(true)
  })

  it('should render correctly with a variant', () => {
    const { container, getByTestId } = render(
      <Text as="h1" data-testid="text" variant="display-lg">
        {content}
      </Text>
    )

    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a h1 element
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(text.classList.toString().includes('display-lg')).toBe(true)
  })

  it('should render correctly with a as property', () => {
    const { container, getByTestId } = render(
      <Text as="div" data-testid="text" variant="display-lg">
        {content}
      </Text>
    )

    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a div element
    expect(container.querySelector('h1')).not.toBeInTheDocument()
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('should render correctly when truncated', () => {
    const { container, getByTestId } = render(
      <Text data-testid="text" lines={3}>
        {longContent}
      </Text>
    )

    const text = getByTestId('text')

    expect(text).toHaveTextContent(longContent)
    // check if is a div element
    expect(container.querySelector('p')).toBeInTheDocument()
    expect(text.classList.toString().includes('with-lines')).toBe(true)
    expect(text.classList.toString().includes('multi-line')).toBe(true)
  })

  it('should render correctly with wordBreak property', () => {
    const { getByTestId } = render(
      <Text className="break-all" data-testid="text">
        {longContent}
      </Text>
    )

    const text = getByTestId('text')

    expect(text).toHaveClass('break-all')
  })
})
