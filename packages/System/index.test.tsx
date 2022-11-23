import React from 'react'

import { render } from '../../utils/tests'
import { Box } from '../Box'

const content = 'test'

describe('<Box>', () => {
  it('should render correctly with the fontStyle style prop', () => {
    const { container, getByTestId } = render(
      <Box $fontStyle="italic" $fontWeight="bold" data-testid="box">
        {content}
      </Box>
    )

    const box = getByTestId('box')

    expect(container).toHaveTextContent(content)
    // check if font-style is set to italic
    expect(getComputedStyle(box).fontStyle).toBe('italic')
  })
})
