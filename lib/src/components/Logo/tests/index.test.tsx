import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Logo, SolutionsSymbol, Symbol } from '..'

describe('<Loader>', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo />)

    expect(container.querySelector('title')).toHaveTextContent('Welcome to the jungle logo')
  })

  it('should render correctly other logo', () => {
    render(<SolutionsSymbol />)

    expect(screen.getByTitle('Welcome to the jungle solutions symbol')).toBeInTheDocument()
  })

  it('should render correctly other symbol', () => {
    const { container } = render(<Symbol />)

    expect(container.querySelector('title')).toHaveTextContent('Welcome to the jungle symbol')
  })
})
