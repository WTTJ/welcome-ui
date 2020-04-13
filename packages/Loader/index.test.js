import React from 'react'

import { render } from '../../src/utils/tests'

import { Loader } from './index'

describe('<Loader>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Loader bacgroundColor="black" dataTestId="loader" />)

    const childrenLength = getByTestId('loader').children.length
    expect(childrenLength).toEqual(3)
  })
})
