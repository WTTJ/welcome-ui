import React from 'react'

import { render } from '../../src/utils/tests'

import { Alert, AlertTitle } from './index'

const content = 'jungle'

describe('<Alert>', () => {
  it('should render correctly', () => {
    const { container } = render(<Alert>{content}</Alert>)

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly with AlertTitle', () => {
    const { container, getByTestId } = render(
      <Alert>
        <AlertTitle dataTestId="alert-title">title</AlertTitle>
        <span>{content}</span>
      </Alert>
    )
    const alertTitle = getByTestId('alert-title')

    expect(container).toHaveTextContent(content)
    expect(alertTitle).toHaveStyleRule('margin-bottom', '0.625rem')
  })

  it('should render correctly with only an AlertTitle', () => {
    const { getByTestId } = render(
      <Alert>
        <AlertTitle dataTestId="alert-title">title</AlertTitle>
      </Alert>
    )
    const alertTitle = getByTestId('alert-title')

    expect(alertTitle).toHaveStyleRule('margin-bottom', '0', {
      modifier: ':only-child'
    })
  })
})
