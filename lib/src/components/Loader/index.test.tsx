import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Loader } from './index'

describe('<Loader>', () => {
  it('should render correctly', () => {
    render(<Loader data-testid="loader" />)

    const childrenLength = screen.getByTestId('loader').children.length
    expect(childrenLength).toEqual(3)
  })

  it('should have width and height when using the size prop with theme value', () => {
    render(<Loader data-testid="loader" size="sm" />)
    const loader = screen.getByTestId('loader')
    const dot = loader.children[0]

    expect(dot.className).toMatch('size-sm')
  })

  it('should have width and height when using the size prop with px value', () => {
    render(<Loader data-testid="loader" size="10px" />)
    const loader = screen.getByTestId('loader')
    const dot = loader.children[0]

    expect(dot.className).toMatch('size-10px')
    expect(dot).toHaveStyle({ '--size': '10px' })
  })

  it('should have width and height when using the size prop with no value', () => {
    render(<Loader data-testid="loader" size="16" />)
    const loader = screen.getByTestId('loader')
    const dot = loader.children[0]

    expect(dot.className).toMatch('size-16')
    expect(dot).toHaveStyle({ '--size': '16px' })
  })
})
