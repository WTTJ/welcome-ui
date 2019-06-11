import React from 'react'

import { render } from '../../utils/tests'

import { IconButton } from './index'

const content = 'Jungle'

describe('<IconButton>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<IconButton>{content}</IconButton>)
    const button = getByTestId('icon-button')

    expect(button).toHaveTextContent(content)
    expect(button).toHaveStyleRule('height', '2.25rem')
    expect(button).toHaveStyleRule('width', '2.25rem')
  })
})
