import React from 'react'
import { describe, expect, it } from 'vitest'

import { Alert } from '../'
import { render } from '../../../../tests'

const content = 'jungle'

describe('<Alert>', () => {
  it('should render correctly', () => {
    const { container } = render(<Alert>{content}</Alert>)

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly', () => {
    const { container, getByTestId } = render(
      <Alert>
        <Alert.Title dataTestId="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )
    const alertTitle = getByTestId('alert-title')

    expect(container).toHaveTextContent(content)
    expect(container.getElementsByTagName('svg')[0]).toHaveAttribute('alt', 'Promote')
    expect(alertTitle).toHaveStyle({ 'margin-bottom': '0.25rem' })
  })

  it('should render correctly md size', () => {
    const { container, getByTestId } = render(
      <Alert size="md">
        <Alert.Title dataTestId="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )
    const alertTitle = getByTestId('alert-title')

    expect(container).toHaveTextContent(content)
    expect(alertTitle).toHaveStyle({ 'margin-bottom': '0.5rem' })
  })

  it('should render correctly success alert', () => {
    const { container } = render(
      <Alert variant="success">
        <Alert.Title dataTestId="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )

    expect(container).toHaveTextContent(content)
    expect(container.getElementsByTagName('svg')[0]).toHaveAttribute('alt', 'Check')
  })

  it('should render correctly with CTA', () => {
    const { getByTestId, queryByTestId } = render(
      <Alert
        cta={
          <>
            {false && <Alert.Button dataTestId="button" />}
            <Alert.SecondaryButton dataTestId="secondary-button" />
          </>
        }
      >
        <Alert.Title dataTestId="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )

    expect(queryByTestId('button')).not.toBeInTheDocument()
    expect(getByTestId('secondary-button')).toBeInTheDocument()
  })
})
