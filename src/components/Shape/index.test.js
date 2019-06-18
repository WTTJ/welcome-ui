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

  it('should render rounded shape', () => {
    const { getByTestId } = render(
      <Shape borderRadius="lg" height="100px" rounded width="100px">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyleRule('border-radius', '100px')
  })
})
