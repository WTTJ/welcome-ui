import React from 'react'

import { render } from '../../utils/tests'
import { createTheme } from '../Core/theme/core'

import { Link } from './index'

const content = 'Jungle'

const theme = createTheme()

describe('<Link>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Link dataTestId="link">{content}</Link>)
    const link = getByTestId('link')

    expect(link).toHaveTextContent(content)
    expect(link).toHaveStyleRule('color', theme.colors.dark[500])
  })

  it('should render correctly with a target blank', () => {
    const { getByTestId } = render(
      <Link dataTestId="link" target="_blank">
        {content}
      </Link>
    )
    const button = getByTestId('link')

    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
