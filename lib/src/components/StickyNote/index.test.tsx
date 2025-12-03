import { screen } from '@testing-library/react'

import { render } from '@tests'

import { StickyNote } from '.'

describe('StickyNote', () => {
  it('should render correctly', () => {
    const { container } = render(<StickyNote>Sample content</StickyNote>)

    expect(screen.getByText('Sample content')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(/variant-brand/)
    expect(container.firstChild).toHaveClass(/shape-square/)
  })

  it('should render with correct variant and shape', () => {
    const { container } = render(
      <StickyNote shape="rectangle" variant="pink">
        Sample content
      </StickyNote>
    )

    expect(container.firstChild).toHaveClass(/variant-pink/)
    expect(container.firstChild).toHaveClass(/shape-rectangle/)
  })

  it('should render close button when handleClose is provided', () => {
    const handleClose = vi.fn()

    const { container } = render(<StickyNote handleClose={handleClose}>Sample content</StickyNote>)

    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should render title', () => {
    render(
      <StickyNote>
        <StickyNote.Title>Sample Title</StickyNote.Title>
        Sample content
      </StickyNote>
    )

    expect(screen.getByText('Sample Title')).toBeInTheDocument()
    expect(document.querySelector('use[href="#lightbulb-alt"]')).toBeInTheDocument()
  })

  it('should render title with variant and icon', () => {
    render(
      <StickyNote variant="orange">
        <StickyNote.Title icon="airplay">Sample Title</StickyNote.Title>
        Sample content
      </StickyNote>
    )

    expect(screen.getByText('Sample Title')).toBeInTheDocument()
    expect(document.querySelector('use[href="#airplay"]')).toBeInTheDocument()
  })

  it('should render button', () => {
    const handleClick = vi.fn()

    render(
      <StickyNote>
        <StickyNote.Button onClick={handleClick}>Click Me</StickyNote.Button>
      </StickyNote>
    )

    const button = screen.getByText('Click Me')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(/variant-primary-neutral/)
    expect(button).toHaveClass(/size-sm/)

    button.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
