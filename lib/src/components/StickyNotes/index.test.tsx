import { screen } from '@testing-library/react'

import { render } from '@tests'

import { StickyNotes } from '.'

describe('StickyNotes', () => {
  it('should render correctly', () => {
    const { container } = render(<StickyNotes>Sample content</StickyNotes>)

    expect(screen.getByText('Sample content')).toBeInTheDocument()
    expect(container.firstChild).toHaveClass(/variant-brand/)
    expect(container.firstChild).toHaveClass(/shape-square/)
  })

  it('should render with correct variant and shape', () => {
    const { container } = render(
      <StickyNotes shape="rectangle" variant="pink">
        Sample content
      </StickyNotes>
    )

    expect(container.firstChild).toHaveClass(/variant-pink/)
    expect(container.firstChild).toHaveClass(/shape-rectangle/)
  })

  it('should render close button when handleClose is provided', () => {
    const handleClose = vi.fn()

    const { container } = render(
      <StickyNotes handleClose={handleClose}>Sample content</StickyNotes>
    )

    expect(container.querySelector('button')).toBeInTheDocument()
  })

  it('should render title', () => {
    render(
      <StickyNotes>
        <StickyNotes.Title>Sample Title</StickyNotes.Title>
        Sample content
      </StickyNotes>
    )

    expect(screen.getByText('Sample Title')).toBeInTheDocument()
    expect(screen.getByText('Sample Title').previousSibling).toHaveClass(/title-icon-variant-brand/)
    expect(document.querySelector('use[href="#lightbulb-alt"]')).toBeInTheDocument()
  })

  it('should render title with variant and icon', () => {
    render(
      <StickyNotes variant="orange">
        <StickyNotes.Title icon="airplay">Sample Title</StickyNotes.Title>
        Sample content
      </StickyNotes>
    )

    expect(screen.getByText('Sample Title')).toBeInTheDocument()
    expect(screen.getByText('Sample Title').previousSibling).toHaveClass(
      /title-icon-variant-orange/
    )
    expect(document.querySelector('use[href="#airplay"]')).toBeInTheDocument()
  })

  it('should render button', () => {
    const handleClick = vi.fn()

    render(
      <StickyNotes>
        <StickyNotes.Button onClick={handleClick}>Click Me</StickyNotes.Button>
      </StickyNotes>
    )

    const button = screen.getByText('Click Me')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass(/variant-primary-neutral/)
    expect(button).toHaveClass(/size-sm/)

    button.click()

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
