import React from 'react'

import { render } from '../../utils/tests'
import { colors } from '../Core/theme/colors'

import { Hint } from './index'

const content = 'Jungle'

describe('<Hint>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Hint dataTestId="hint">{content}</Hint>)
    const button = getByTestId('hint')

    expect(button).toHaveTextContent(content)
    expect(button).toHaveStyleRule('color', colors.light[500])
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(
      <Hint dataTestId="hint" variant="error">
        {content}
      </Hint>
    )
    const button = getByTestId('hint')

    expect(button).toHaveTextContent(content)
    expect(button).toHaveStyleRule('color', colors.danger[700])
  })
})
