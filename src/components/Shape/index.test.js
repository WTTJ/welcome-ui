import React from 'react'

import { render } from '../../utils/tests'

import { Shape } from './index'

const content = 'Jungle'

describe('<Shape>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Shape height="100px" width="100px">
        {content}
      </Shape>
    )

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly with borderRadius', () => {
    const { getByTestId } = render(
      <Shape borderRadius="lg" height="100px" width="100px">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyleRule('border-radius', '10px')
  })

  it('using shape with unequal width / height props should use biggest value', () => {
    const { getByTestId } = render(
      <Shape height="1px" shape="circle" width="100px">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyleRule('width', '100px')
    expect(shape).toHaveStyleRule('height', '100px')
    expect(shape).toHaveStyleRule('border-radius', '50%')
  })

  it('should render a circle shape', () => {
    const { getByTestId } = render(
      <Shape borderRadius="lg" height="100px" shape="circle" width="100px">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyleRule('border-radius', '50%')
  })
})
