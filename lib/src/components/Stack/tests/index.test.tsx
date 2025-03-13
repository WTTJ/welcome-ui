import { screen } from '@testing-library/react'

import { render } from '../../../../tests'
import { Stack } from '../'

const content = [<div key="0">Foo</div>, <div key="1">Bar</div>]

describe('<Stack>', () => {
  it('should render correctly with no props', () => {
    render(<Stack dataTestId="stack">{content}</Stack>)

    const stack = screen.getByTestId('stack')

    expect(stack).toHaveTextContent('Foo')
  })

  it('should render correctly with custom props', () => {
    const { getByText } = render(
      <Stack as="ul" direction="row" spacing="xl">
        {content}
      </Stack>
    )
    const foo = getByText('Foo')

    expect(foo?.parentElement?.tagName).toBe('LI')
  })
})
