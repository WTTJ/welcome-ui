import React from 'react'

import { Hint } from '../'
import { colors } from '../../../theme/colors'
import { render } from '../../../../tests'

const content = 'Jungle'

describe('<Hint>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Hint dataTestId="hint">{content}</Hint>)
    const hint = getByTestId('hint')

    expect(hint).toHaveTextContent(content)
    expect(hint).toHaveStyle({ 'font-size': '0.75rem' })
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(
      <Hint dataTestId="hint" variant="danger">
        {content}
      </Hint>
    )
    const hint = getByTestId('hint')

    expect(hint).toHaveTextContent(content)
    expect(hint).toHaveStyle({ color: colors['red-70'] })
  })
})
