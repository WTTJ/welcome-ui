import { screen } from '@testing-library/react'
import React from 'react'

import { SunIcon } from '@/Icons'
import { IconsFont } from '@/IconsFont'
import { Link } from '@/Link'
import { createTheme } from '@/theme'

import { Button } from '../'
import { render } from '../../../../tests'

const content = 'Jungle'
const theme = createTheme()

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button dataTestId="button">{content}</Button>)

    const button = screen.getByTestId('button')

    // need to remove active state, it's a bug
    button.focus()

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button).toHaveStyle({ 'background-color': theme.colors['primary-40'] })
    expect(button).toHaveStyle({ height: theme.buttons.sizes.md.height })
  })

  it('should render a danger button', () => {
    render(
      <Button danger dataTestId="button">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    // need to remove active state, it's a bug
    button.focus()

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button).toHaveStyle({ 'background-color': theme.colors['red-70'] })
  })

  it('should call onClick property', async () => {
    const onClick = vi.fn()

    const { user } = render(
      <Button dataTestId="button" onClick={onClick}>
        {content}
      </Button>
    )

    const eventElement = screen.getByText(content)

    await user.click(eventElement)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should look like a square', () => {
    render(
      <Button dataTestId="button" shape="square" size="sm">
        {content}
      </Button>
    )
    const button = screen.getByTestId('button')

    expect(button).toHaveStyle({ width: theme.buttons.sizes.sm.height })
    expect(button).toHaveStyle({ height: theme.buttons.sizes.sm.height })
  })

  it('should have correct size', () => {
    render(
      <Button dataTestId="button" size="sm">
        {content}
      </Button>
    )
    const button = screen.getByTestId('button')

    expect(button).toHaveStyle({ height: theme.buttons.sizes.sm.height })
  })

  describe('disabled', () => {
    it('should not call onClick property', async () => {
      const onClick = vi.fn()

      render(
        <Button dataTestId="button" disabled onClick={onClick}>
          {content}
        </Button>
      )

      const eventElement = screen.getByText(content)

      expect(eventElement).toBeDisabled()
    })

    it('should have disabled attribute', () => {
      render(
        <Button dataTestId="button" disabled>
          {content}
        </Button>
      )

      const button = screen.getByTestId('button')

      expect(button).toBeDisabled()
      expect(button).toHaveStyle({ 'background-color': theme.colors['beige-40'] })
      expect(button).toHaveStyle({ 'border-color': theme.colors['beige-40'] })
    })
  })

  it('should forward as div', () => {
    render(
      <Button as="div" dataTestId="button">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('div')
  })

  it('should forward as a', () => {
    render(
      <Button as="a" dataTestId="button" href={content}>
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveAttribute('href', content)
  })

  it('should forward as Link', () => {
    render(
      <Button as={Link} className="wui-test" dataTestId="button" target="_blank">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveClass('wui-test')
    expect(button).toHaveAttribute('rel', 'noopener noreferrer') // added by target="_blank" on Link
  })

  it('should have correct Icon size with Icon and text', () => {
    render(
      <Button dataTestId="button" size="sm">
        <SunIcon dataTestId="sun" />
        <span>{content}</span>
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-sun')

    expect(button).toHaveStyle({ height: theme.buttons.sizes.sm.height })
    expect(icon).toHaveStyle({
      'font-size': theme.buttons.icon.default.sm,
      height: theme.buttons.icon.default.sm,
      width: theme.buttons.icon.default.sm,
    })
  })

  it('should have correct Icon size with Icon only', () => {
    render(
      <Button dataTestId="button" size="md">
        <SunIcon dataTestId="sun" />
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-sun')

    expect(button).toHaveStyle({ height: theme.buttons.sizes.md.height })
    expect(icon).toHaveStyle({
      'font-size': theme.buttons.icon.only.md,
      height: theme.buttons.icon.only.md,
      width: theme.buttons.icon.only.md,
    })
  })

  it('should have correct IconsFont size with IconsFont and text', () => {
    render(
      <Button dataTestId="button" size="sm">
        <IconsFont.Sun dataTestId="sun" />
        <span>{content}</span>
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-font-sun')

    expect(button).toHaveStyle({ height: theme.buttons.sizes.sm.height })
    expect(icon).toHaveStyle({
      'font-size': theme.buttons.icon.default.sm,
      height: theme.buttons.icon.default.sm,
      width: theme.buttons.icon.default.sm,
    })
  })

  it('should have correct IconsFont size with IconsFont only', () => {
    render(
      <Button dataTestId="button" size="md">
        <IconsFont.Sun dataTestId="sun" />
      </Button>
    )

    const button = screen.getByTestId('button')
    const icon = screen.getByTestId('icon-font-sun')

    expect(button).toHaveStyle({ height: theme.buttons.sizes.md.height })
    expect(icon).toHaveStyle({
      'font-size': theme.buttons.icon.only.md,
      height: theme.buttons.icon.only.md,
      width: theme.buttons.icon.only.md,
    })
  })

  it('should have data-loading attribute', () => {
    render(
      <Button dataTestId="button" isLoading size="md">
        {content}
      </Button>
    )

    const button = screen.getByTestId('button')

    expect(button).toHaveAttribute('data-loading', 'true')
  })
})
