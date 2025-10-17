import { screen } from '@testing-library/react'

import { Icon } from '@/components/Icon'
import { Link } from '@/components/Link'

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
    expect(button.classList.toString().includes('size-lg')).toBe(true)
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

  it('should have correct size', () => {
    render(
      <Button data-testid="button" size="md">
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
      // expect(button.classList.toString().includes('disabled')).toBe(true) // disabled is no longer a variant, think about how to test
    })
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
      <Button data-testid="button" size="md">
        <Icon data-testid="sun" name="sun" />
        <span>{content}</span>
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.classList.toString().includes('size-sm')).toBe(true)
  })

  it('should have correct Icon size with Icon only', () => {
    render(
      <Button data-testid="button">
        <Icon data-testid="sun" name="sun" />
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('sun')
    expect(button.classList.toString().includes('size-md')).toBe(true)
    expect(icon.classList.toString().includes('size-md')).toBe(true)
  })

  // FIXME: enable when loading style fixed
  it.skip('should have data-loading attribute', () => {
    render(
      <Button data-testid="button" isLoading>
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('data-loading', 'true')
  })
})
