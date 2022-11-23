import React from 'react'

import { render } from '../../utils/tests'

import { Shape } from './index'

const content = 'Jungle'

describe('<Shape>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Shape $h="100px" $w="100px">
        {content}
      </Shape>
    )

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly with borderRadius', () => {
    const { getByTestId } = render(
      <Shape $borderRadius="lg" $h="100px" $w="100px" dataTestId="shape">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyleRule('border-radius', '10px')
  })

  it('using shape with unequal width / height props should use biggest value', () => {
    const { getByTestId } = render(
      <Shape $h="1px" $w="100px" dataTestId="shape" shape="circle">
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
      <Shape $borderRadius="lg" $h="100px" $w="100px" dataTestId="shape" shape="circle">
        {content}
      </Shape>
    )
    const shape = getByTestId('shape')

    expect(shape).toHaveStyleRule('border-radius', '50%')
  })
})
