import React from 'react'

import { render } from '../../src/utils/tests'

import { Avatar } from './index'

describe('<Badge>', () => {
  it('should render correctly', () => {
    const { container } = render(<Avatar alt="welcome" src="src" words={['welcome', 'jungle']} />)

    expect(container).not.toHaveTextContent('WJ')
  })

  it('should render without image and 2 words', () => {
    const { container } = render(<Avatar alt="welcome" words={['welcome', 'jungle']} />)

    expect(container).toHaveTextContent('WJ')
  })

  it('should render without image and 1 word', () => {
    const { container, debug } = render(<Avatar alt="welcome" words={['welcome']} />)
    debug(container)
    expect(container).toHaveTextContent('W')
  })
})
