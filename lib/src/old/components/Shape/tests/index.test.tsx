import { Shape } from '../'
import { render } from '../../../../../tests'

const content = 'Jungle'

describe('<Shape>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Shape h="100px" w="100px">
        {content}
      </Shape>
    )

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly with borderRadius', () => {
    const { getByTestId } = render(
      <Shape borderRadius="lg" dataTestId="shape" h="100px" w="100px">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyle({ 'border-radius': '0.5rem' })
  })

  it('using shape with unequal width / height props should use biggest value', () => {
    const { getByTestId } = render(
      <Shape dataTestId="shape" h="1px" shape="circle" w="100px">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyle({ width: '100px' })
    expect(shape).toHaveStyle({ height: '100px' })
    expect(shape).toHaveStyle({ 'border-radius': '50%' })
  })

  it('should render a circle shape', () => {
    const { getByTestId } = render(
      <Shape borderRadius="lg" dataTestId="shape" h="100px" shape="circle" w="100px">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyle({ 'border-radius': '50%' })
  })
})
