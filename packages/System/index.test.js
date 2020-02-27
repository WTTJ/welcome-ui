import React from 'react'

import { render } from '../../src/utils/tests'
import { Box } from '../Box'

const content = 'test'

describe('<Box>', () => {
  it('should render correctly with the fontStyle style prop', () => {
    const { container, getByTestId } = render(
      <Box data-testid="box" fontStyle="italic" fontWeight="bold">
        {content}
      </Box>
    )

    const box = getByTestId('box')

    expect(container).toHaveTextContent(content)
    // check if font-style is set to italic
    expect(box).toHaveStyleRule('font-style', 'italic')
  })
})
