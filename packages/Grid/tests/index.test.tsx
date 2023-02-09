import React from 'react'

import { render } from '../../../utils/tests'
import { Grid } from '../src'

const content = 'Jungle'

describe('<Flex>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Grid dataTestId="grid">{content}</Grid>)
    const element = getByTestId('grid')

    expect(element).toHaveTextContent(content)
    expect(element).toHaveStyleRule('display', 'grid')
  })
})
