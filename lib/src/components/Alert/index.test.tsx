import { screen } from '@testing-library/react'

import { render } from '@tests'

import { AlertButton } from './components/Buttons'

import { Alert } from './'

const content = 'jungle'

describe('<Alert>', () => {
  it('should render correctly', () => {
    const { container } = render(<Alert>{content}</Alert>)

    expect(container).toHaveTextContent(content)

    const bulbIcon = document.querySelector('use[href="#lightbulb-alt"]')
    expect(bulbIcon).toBeInTheDocument()
  })

  it('should render the close button when handleClose is provided', async () => {
    const handleClose = vi.fn()
    const { user } = render(<Alert handleClose={handleClose}>{content}</Alert>)

    const closeButton = screen.getByRole('button')
    expect(closeButton).toBeInTheDocument()

    await user.click(closeButton)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  describe('should render sizes correctly', () => {
    it('medium', () => {
      const { container } = render(
        <Alert cta={<AlertButton>Action</AlertButton>} size="md">
          {content}
        </Alert>
      )

      expect(container.firstChild).toHaveClass(/size-md/)

      const actionButton = screen.getByRole('button')
      expect(actionButton).toHaveClass(/size-md/)
    })

    it('large', () => {
      const { container } = render(
        <Alert cta={<AlertButton>Action</AlertButton>} size="lg">
          {content}
        </Alert>
      )

      expect(container.firstChild).toHaveClass(/size-lg/)

      const actionButton = screen.getByRole('button')
      expect(actionButton).toHaveClass(/size-lg/)
    })
  })

  it('should render full width', () => {
    const { container } = render(<Alert isFullWidth>{content}</Alert>)

    expect(container.firstChild).toHaveClass(/full-width/)
  })

  describe('should render variants correctly', () => {
    it('information', () => {
      const { container } = render(<Alert variant="info">{content}</Alert>)

      expect(container.firstChild).toHaveClass(/variant-info/)

      const infoIcon = document.querySelector('use[href="#info-circle"]')
      expect(infoIcon).toBeInTheDocument()
    })

    it('success', () => {
      const { container } = render(<Alert variant="success">{content}</Alert>)

      expect(container.firstChild).toHaveClass(/variant-success/)

      const successIcon = document.querySelector('use[href="#check-circle"]')
      expect(successIcon).toBeInTheDocument()
    })

    it('warning', () => {
      const { container } = render(<Alert variant="warning">{content}</Alert>)

      expect(container.firstChild).toHaveClass(/variant-warning/)

      const warningIcon = document.querySelector('use[href="#exclamation-triangle"]')
      expect(warningIcon).toBeInTheDocument()
    })

    it('danger', () => {
      const { container } = render(<Alert variant="danger">{content}</Alert>)

      expect(container.firstChild).toHaveClass(/variant-danger/)

      const dangerIcon = document.querySelector('use[href="#exclamation-octagon"]')
      expect(dangerIcon).toBeInTheDocument()
    })

    it('brand', () => {
      const { container } = render(<Alert variant="brand">{content}</Alert>)

      expect(container.firstChild).toHaveClass(/variant-brand/)

      const brandIcon = document.querySelector('use[href="#lightbulb-alt"]')
      expect(brandIcon).toBeInTheDocument()
    })

    it('ai', () => {
      const { container } = render(<Alert variant="ai">{content}</Alert>)
      expect(container.firstChild).toHaveClass(/variant-ai/)

      const aiIcon = document.querySelector('use[href="#sparkles"]')
      expect(aiIcon).toBeInTheDocument()
    })
  })
})
