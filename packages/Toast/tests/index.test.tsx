import React from 'react'

import { render } from '../../../utils/tests'
import { Toast } from '../src'

const content = 'Jungle'

describe('<Title>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', 'rgba(0,0,0,1)')
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', 'rgba(0,0,0,1)')
  })
})
