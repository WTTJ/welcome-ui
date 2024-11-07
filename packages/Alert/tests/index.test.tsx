import React from 'react'

import { render } from '../../../utils/tests'
import { Alert } from '../src'

const content = 'jungle'

describe('<Alert>', () => {
  it('should render correctly', () => {
    const { container } = render(<Alert>{content}</Alert>)

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly with ', () => {
    const { container, getByTestId } = render(
      <Alert>
        <Alert.Title dataTestId="alert-title">title</Alert.Title>
        <span>{content}</span>
      </Alert>
    )
    const alertTitle = getByTestId('alert-title')

    expect(container).toHaveTextContent(content)
    expect(alertTitle).toHaveStyleRule('margin-bottom', '0.25rem')
  })

  it('should render correctly with only an Alert.Title', () => {
    const { getByTestId } = render(
      <Alert>
        <Alert.Title dataTestId="alert-title">title</Alert.Title>
      </Alert>
    )
    const alertTitle = getByTestId('alert-title')

    expect(alertTitle).toHaveStyleRule('margin-bottom', '0', {
      modifier: ':only-child',
    })
  })
})
