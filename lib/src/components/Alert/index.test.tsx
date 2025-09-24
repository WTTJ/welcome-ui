import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Alert } from './'

const content = 'jungle'

describe('<Alert>', () => {
  it('should render correctly', () => {
    const { container } = render(<Alert>{content}</Alert>)

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly a title', () => {
    const { container } = render(
      <Alert>
        <Alert.Title data-testid="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )
    const alertTitle = screen.getByTestId('alert-title')

    const icon = container.querySelector('svg')
    const iconWrapper = icon.parentElement

    expect(iconWrapper).toHaveClass(/variant-icon/)
    expect(iconWrapper).not.toHaveClass(
      /variant-success|variant-warning|variant-info|variant-ai|variant-danger/
    )
    expect(alertTitle).toHaveClass(/title-size-sm/)
    expect(alertTitle).not.toHaveClass(/title-close-button/)
  })

  it('should render correctly a title with close button', () => {
    render(
      <Alert handleClose={() => {}}>
        <Alert.Title data-testid="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )

    const alertTitle = screen.getByTestId('alert-title')

    expect(alertTitle).toHaveClass(/title-close-button/)
  })

  it('should render correctly size', () => {
    render(
      <Alert size="md">
        <Alert.Title data-testid="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )
    const alertTitle = screen.getByTestId('alert-title')

    expect(alertTitle).toHaveClass(/title-size-md/)
  })

  it('should render correctly variant alert', () => {
    const { container } = render(
      <Alert data-testid="alert" variant="success">
        <Alert.Title>title</Alert.Title>
        {content}
      </Alert>
    )

    const icon = container.querySelector('svg')
    const iconWrapper = icon.parentElement

    expect(icon).toBeInTheDocument()
    expect(iconWrapper).toBeInTheDocument()
    expect(iconWrapper).toHaveClass(/variant-icon|variant-success/)
    expect(screen.getByTestId('alert')).toHaveClass(/variant-success/)
  })

  it('should render correctly wtih CTA', () => {
    render(
      <Alert
        cta={
          <>
            <Alert.Button data-testid="button">Button</Alert.Button>
            <Alert.SecondaryButton data-testid="secondary-button">
              Secondary Button
            </Alert.SecondaryButton>
          </>
        }
      >
        <Alert.Title data-testid="alert-title">title</Alert.Title>
        {content}
      </Alert>
    )

    expect(screen.getByTestId('button')).toBeInTheDocument()
    expect(screen.getByTestId('secondary-button')).toBeInTheDocument()
  })

  it('should render correctly without icon', () => {
    render(
      <Alert data-testid="alert" hideIcon>
        <Alert.Title>title</Alert.Title>
        {content}
      </Alert>
    )

    expect(screen.queryByText('Promote')).not.toBeInTheDocument()
    expect(screen.getByTestId('alert')).not.toHaveClass(/icon/)
  })
})
