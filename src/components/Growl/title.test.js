import React from 'react'

import { render } from '../../utils/tests'

import { GrowlTitle } from './index'

const content = 'Jungle'

describe('<GrowlTitle>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<GrowlTitle dataTestId="growl-title">{content}</GrowlTitle>)
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', '#4E4EAA')
  })

  it('should render correctly with a state', () => {
    const { getByTestId } = render(
      <GrowlTitle dataTestId="growl-title" variant="error">
        {content}
      </GrowlTitle>
    )
    const title = getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyleRule('color', '#D62327')
  })
})
