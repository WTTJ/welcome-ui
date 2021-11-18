import React from 'react'

import { createTheme } from '../Core/theme/core'
import { render } from '../../utils/tests'

import { ButtonLink } from './index'

const content = 'Jungle'

describe('<ButtonLink>', () => {
  it('should render correctly', () => {
    const theme = createTheme()
    const { getByTestId } = render(<ButtonLink dataTestId="button">{content}</ButtonLink>)
    const button = getByTestId('button')

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button).toHaveStyleRule('background-color', theme.colors.primary[500])
    expect(button).toHaveStyleRule('height', theme.buttons.sizes.md.height)
  })
})
