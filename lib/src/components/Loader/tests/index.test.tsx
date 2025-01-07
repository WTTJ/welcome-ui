import React from 'react'

import { Loader } from '../'
import { render, theme } from '../../../../../utils/tests'

describe('<Loader>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Loader color="neutral-90" dataTestId="loader" />)

    const childrenLength = getByTestId('loader').children.length
    expect(childrenLength).toEqual(3)
  })

  it('should have width and height when using the size prop with theme value', () => {
    const { getByTestId } = render(<Loader color="neutral-90" dataTestId="loader" size="sm" />)
    const loader = getByTestId('loader')
    const dot = loader.firstChild

    expect(dot).toHaveStyleRule('width', theme.loaders.sm)
    expect(dot).toHaveStyleRule('height', theme.loaders.sm)
  })

  it('should have width and height when using the size prop with px value', () => {
    const { getByTestId } = render(<Loader color="neutral-90" dataTestId="loader" size="10px" />)
    const loader = getByTestId('loader')
    const dot = loader.firstChild

    expect(dot).toHaveStyleRule('width', '10px')
    expect(dot).toHaveStyleRule('height', '10px')
  })

  it('should have width and height when using the size prop with no value', () => {
    const { getByTestId } = render(<Loader color="neutral-90" dataTestId="loader" size="16" />)
    const loader = getByTestId('loader')
    const dot = loader.firstChild

    expect(dot).toHaveStyleRule('width', theme.toRem(16))
    expect(dot).toHaveStyleRule('height', theme.toRem(16))
  })
})
