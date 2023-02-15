import React from 'react'

import { render } from '../../../utils/tests'
import { createTheme } from '../../Core/src/theme/core'
import { Stack } from '../src'

const content = [<div key="0">Foo</div>, <div key="1">Bar</div>]

describe('<Stack>', () => {
  it('should render correctly with no props', () => {
    const { getByText } = render(<Stack>{content}</Stack>)
    const foo = getByText('Foo')
    const bar = getByText('Bar')

    expect(getComputedStyle(foo.parentElement).marginBottom).toBe('0.75rem')
    expect(getComputedStyle(bar.parentElement).marginBottom).toBe('')
  })

  it('should render correctly with custom props', () => {
    const theme = createTheme()
    const { getByText } = render(
      <Stack as="ul" direction="row" spacing="xl">
        {content}
      </Stack>
    )
    const foo = getByText('Foo')

    expect(getComputedStyle(foo.parentElement).marginRight).toBe(theme.space.xl)
    expect(foo.parentElement.tagName).toBe('LI')
  })
})
