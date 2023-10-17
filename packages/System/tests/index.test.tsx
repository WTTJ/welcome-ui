import React from 'react'
import { describe, expect, it } from 'vitest'

import { render } from '../../../utils/tests'
import { Box } from '../../Box/src'

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
    expect(getComputedStyle(box).fontStyle).toBe('italic')
  })
})
