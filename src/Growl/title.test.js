import React from 'react'

import { render } from '../../utils/tests'
import { colors } from '../../theme/colors'

import { GrowlTitle } from './index'

const content = 'Jungle'

describe('<GrowlTitle>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<GrowlTitle dataTestId="growl-title">{content}</GrowlTitle>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', colors.info[500])
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(
      <GrowlTitle dataTestId="growl-title" variant="error">
        {content}
      </GrowlTitle>
    )
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', colors.danger[500])
  })
})
