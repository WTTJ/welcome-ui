import React from 'react'

import { render } from '../../utils/tests'
import { colors } from '../Core/theme/colors'

import { Hint } from './index'

const content = 'Jungle'

describe('<Hint>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Hint dataTestId="hint">{content}</Hint>)
    const hint = getByTestId('hint')

    expect(hint).toHaveTextContent(content)
    expect(hint).toHaveStyleRule('font-size', '0.75rem')
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(
      <Hint dataTestId="hint" variant="error">
        {content}
      </Hint>
    )
    const hint = getByTestId('hint')

    expect(hint).toHaveTextContent(content)
    expect(hint).toHaveStyleRule('color', colors['danger-500'])
  })
})
