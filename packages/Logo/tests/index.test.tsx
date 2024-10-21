import React from 'react'

import { render } from '../../../utils/tests'
import { Logo, SolutionsLogo, Symbol } from '../src'

describe('<Loader>', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo />)

    expect(container.querySelector('title')).toHaveTextContent('Welcome to the jungle logo')
  })

  it('should render correctly other logo', () => {
    const { container } = render(<SolutionsLogo />)

    expect(container.querySelector('title')).toHaveTextContent(
      'Welcome to the jungle solutions logo'
    )
  })

  it('should render correctly other symbol', () => {
    const { container } = render(<Symbol />)

    expect(container.querySelector('title')).toHaveTextContent('Welcome to the jungle symbol')
  })
})
