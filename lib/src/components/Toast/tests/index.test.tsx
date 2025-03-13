import React from 'react'

import { render } from '../../../../tests'
import { Toast } from '../'

const content = 'Jungle'

describe('<Title>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyle({ color: '#000000' })
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyle({ color: '#000000' })
  })
})
