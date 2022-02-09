import React from 'react'

import { render } from '../../utils/tests'
import { colors } from '../Core/theme/colors'

import { Toast } from './index'

const content = 'Jungle'

describe('<Title>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', colors.info[700])
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(
      <Toast.Title data-testid="growl-title" variant="error">
        {content}
      </Toast.Title>
    )
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', colors.danger[700])
  })
})
