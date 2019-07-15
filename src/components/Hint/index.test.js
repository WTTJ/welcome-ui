import React from 'react'

import { render } from '../../utils/tests'

import { Hint } from './index'

const content = 'Jungle'

describe('<Hint>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Hint>{content}</Hint>)
    const button = getByTestId('hint')

    expect(button).toHaveTextContent(content)
    expect(button).toHaveStyleRule('color', '#8e8e8e')
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(<Hint variant="error">{content}</Hint>)
    const button = getByTestId('hint')

    expect(button).toHaveTextContent(content)
    expect(button).toHaveStyleRule('color', '#D62327')
  })
})
