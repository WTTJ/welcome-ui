import React from 'react'

import { render } from '../../utils/tests'
import { colors } from '../Core/theme/colors'

import { Title } from './Title'

const content = 'Jungle'

describe('<Title>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Title data-testid="growl-title">{content}</Title>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', colors.info[700])
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(
      <Title data-testid="growl-title" variant="error">
        {content}
      </Title>
    )
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', colors.danger[700])
  })
})
