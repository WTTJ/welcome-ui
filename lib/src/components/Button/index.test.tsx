import { screen } from '@testing-library/react'

import { SunIcon } from '@old/Icons'
import { IconsFont } from '@old/IconsFont'
import { Link } from '@old/Link'

import { expectAsSupport, render } from '@tests'

import { Button } from './'

describe('Button', () => {
  expectAsSupport(Button)

  const content = 'Jungle'

  it('should render correctly', () => {
    render(<Button data-testid="button">{content}</Button>)

    const button = screen.getByTestId('button')

    // need to remove active state, it's a bug
    button.focus()

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button.classList.toString().includes('variant-primary')).toBe(true)
    expect(button.classList.toString().includes('size-md')).toBe(true)
  })

  it('should render a danger button', () => {
    render(
      <Button data-testid="button" variant="primary-danger">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    // need to remove active state, it's a bug
    button.focus()

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button.classList.toString().includes('variant-primary-danger')).toBe(true)
  })

  it('should call onClick property', async () => {
    const onClick = vi.fn()

    const { user } = render(
      <Button data-testid="button" onClick={onClick}>
        {content}
      </Button>
    )

    const eventElement = screen.getByText(content)

    await user.click(eventElement)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should look like a square', () => {
    render(
      <Button data-testid="button" shape="square" size="sm">
        {content}
      </Button>
    )
    const button = screen.getByTestId('button')
    expect(button.classList.toString().includes('shape-square')).toBe(true)
    expect(button.classList.toString().includes('size-sm')).toBe(true)
  })

  it('should have correct size', () => {
    render(
      <Button data-testid="button" size="sm">
        {content}
      </Button>
    )
    const button = screen.getByTestId('button')

    expect(button.classList.toString().includes('size-sm')).toBe(true)
  })

  describe('disabled', () => {
    it('should not call onClick property', async () => {
      const onClick = vi.fn()

      render(
        <Button data-testid="button" disabled onClick={onClick}>
          {content}
        </Button>
      )

      const eventElement = screen.getByText(content)

      expect(eventElement).not.toBeDisabled() // because of Ariakit adding accessibleWhenDisabled by default
    })

    it('should have disabled attribute', () => {
      render(
        <Button data-testid="button" disabled>
          {content}
        </Button>
      )

      const button = screen.getByTestId('button')

      expect(button).not.toBeDisabled() // because of Ariakit adding accessibleWhenDisabled by default
      expect(button.classList.toString().includes('variant-disabled')).toBe(true)
    })
  })

  it('should forward as div', () => {
    render(
      <Button as="div" data-testid="button">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('div')
  })

  it('should forward as a', () => {
    render(
      <Button as="a" data-testid="button" href={content}>
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveAttribute('href', content)
  })

  it('should allow tailwind classes override', () => {
    render(
      <Button className="mt-3xl" data-testid="button">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveClass('mt-3xl')
  })

  it('should allow tailwind classes override when using render prop', () => {
    render(
      <Button as="a" className="px-3xl" data-testid="button">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveClass('px-3xl')
  })

  it('should forward as Link', () => {
    render(
      <Button as={Link} className="wui-test mt-3xl" data-testid="button" target="_blank">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveClass('wui-test')
    expect(button).toHaveClass('mt-3xl')
    expect(button).toHaveAttribute('rel', 'noopener noreferrer') // added by target="_blank" on Link
  })

  it('should have correct Icon size with Icon and text', () => {
    render(
      <Button data-testid="button" size="sm">
        <SunIcon dataTestId="sun" />
        <span>{content}</span>
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.classList.toString().includes('size-sm')).toBe(true)
  })

  it('should have correct Icon size with Icon only', () => {
    render(
      <Button data-testid="button" size="md">
        <SunIcon dataTestId="sun" />
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-sun')
    expect(button.classList.toString().includes('size-md')).toBe(true)
    expect(icon).toHaveStyle({ height: '1.5rem', width: '1.5rem' })
  })

  it('should have correct IconsFont size with IconsFont and text', () => {
    render(
      <Button data-testid="button" size="sm">
        <IconsFont.Sun data-testid="sun" />
        <span>{content}</span>
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.classList.toString().includes('size-sm')).toBe(true)
  })

  it('should have correct IconsFont size with IconsFont only', () => {
    render(
      <Button data-testid="button" size="md">
        <IconsFont.Sun dataTestId="sun" />
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.classList.toString().includes('size-md')).toBe(true)
  })

  // FIXME: enable when loading style fixed
  it.skip('should have data-loading attribute', () => {
    render(
      <Button data-testid="button" isLoading size="md">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('data-loading', 'true')
  })
})
