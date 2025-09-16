import { screen } from '@testing-library/react'

import { render } from '../../../../tests/index'
import { Shape } from '../index'

const content = 'Jungle'

describe('<Shape>', () => {
  it('should render correctly', () => {
    render(
      <Shape h="100px" w="100px">
        {content}
      </Shape>
    )

    expect(screen.getByText(content)).toBeVisible()
  })

  it('should render correctly with borderRadius', () => {
    render(
      <Shape borderRadius="lg" dataTestId="shape" h="100px" w="100px">
        {content}
      </Shape>
    )

    const shape = screen.getByTestId('shape')

    expect(shape).toHaveStyle({ 'border-radius': 'var(--radius-lg)' })
  })

  it('using shape with unequal width / height props should use biggest value', () => {
    render(
      <Shape dataTestId="shape" h="1px" w="100px">
        {content}
      </Shape>
    )

    const shape = screen.getByTestId('shape')

    expect(shape).toHaveStyle({ width: '100px' })
    expect(shape).toHaveStyle({ height: '100px' })
  })

  it('should render a circle shape', () => {
    render(
      <Shape dataTestId="shape" h="100px" shape="circle" w="100px">
        {content}
      </Shape>
    )

    const shape = screen.getByTestId('shape')

    expect(shape.className).toMatch(/shape-circle/)
  })
})
