import React from 'react'

import { render } from '../../src/utils/tests'

import { Stack } from './index'

const content = [<div key="0">Foo</div>, <div key="1">Bar</div>]

describe('<Stack>', () => {
  it('should render correctly with no props', () => {
    const { getByText } = render(<Stack>{content}</Stack>)
    const foo = getByText('Foo')
    const bar = getByText('Bar')

    expect(foo.parentElement).toHaveStyleRule('margin-bottom', '0.75rem')
    expect(bar.parentElement).not.toHaveStyleRule()
  })

  it('should render correctly with custom props', () => {
    const { getByText } = render(
      <Stack as="ul" direction="row" spacing="xl">
        {content}
      </Stack>
    )
    const foo = getByText('Foo')

    expect(foo.parentElement).toHaveStyleRule('margin-right', '1.5rem')
    expect(foo.parentElement.tagName).toBe('LI')
  })
})
