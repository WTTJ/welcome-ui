import React from 'react'

import { Avatar } from '../'
import { render } from '../../../../tests'

describe('<Avatar>', () => {
  it('should render correctly', () => {
    const { container } = render(<Avatar name="welcome jungle" src="src" />)

    expect(container).not.toHaveTextContent('WJ')
  })

  it('should render without image and 2 words', () => {
    const { container } = render(<Avatar name="welcome jungle" />)

    expect(container).toHaveTextContent('WJ')
  })

  it('should render without image and 1 word', () => {
    const { container } = render(<Avatar name="welcomejungle" />)

    expect(container).toHaveTextContent('WE')
    expect(container).not.toHaveTextContent('WJ')
  })

  it('should render without image and 2 words with accent', () => {
    const { container } = render(<Avatar name="welcème jungle" />)

    expect(container).toHaveTextContent('WJ')
  })
})
