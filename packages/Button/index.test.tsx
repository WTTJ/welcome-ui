import React from 'react'
import { fireEvent } from '@testing-library/react'
import { Link } from '@welcome-ui/link'

import { createTheme } from '../Core/theme/core'
import { render } from '../../utils/tests'

import { Button } from './index'

const content = 'Jungle'

describe('<Button>', () => {
  it('should render correctly', () => {
    const theme = createTheme()
    const { getByTestId } = render(<Button dataTestId="button">{content}</Button>)
    const button = getByTestId('button')

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button).toHaveStyleRule('background-color', theme.colors.primary[500])
    expect(button).toHaveStyleRule('height', theme.buttons.sizes.md.height)
  })

  it('should call onClick property', () => {
    const onClick = jest.fn()
    const { getByText } = render(
      <Button dataTestId="button" onClick={onClick}>
        {content}
      </Button>
    )

    const eventElement = getByText(content)
    fireEvent.click(eventElement)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should look like a square', () => {
    const theme = createTheme()
    const { getByTestId } = render(
      <Button dataTestId="button" shape="square" size="sm">
        {content}
      </Button>
    )
    const button = getByTestId('button')

    expect(button).toHaveStyleRule('width', theme.buttons.sizes.sm.height)
    expect(button).toHaveStyleRule('height', theme.buttons.sizes.sm.height)
  })

  it('should have correct size', () => {
    const theme = createTheme()
    const { getByTestId } = render(
      <Button dataTestId="button" size="sm">
        {content}
      </Button>
    )
    const button = getByTestId('button')

    expect(button).toHaveStyleRule('height', theme.buttons.sizes.sm.height)
  })

  describe('disabled', () => {
    it('should not call onClick property', () => {
      const onClick = jest.fn()
      const { getByText } = render(
        <Button dataTestId="button" disabled onClick={onClick}>
          {content}
        </Button>
      )

      const eventElement = getByText(content)
      fireEvent.click(eventElement)

      expect(onClick).toHaveBeenCalledTimes(0)
    })

    it('should have disabled attribute', () => {
      const theme = createTheme()
      const { getByTestId } = render(
        <Button dataTestId="button" disabled>
          {content}
        </Button>
      )

      const button = getByTestId('button')

      expect(button).toBeDisabled()
      expect(button).toHaveStyleRule('background-color', theme.colors.nude[500])
      expect(button).toHaveStyleRule('border-color', theme.colors.nude[500])
    })
  })

  it('should forward as div', () => {
    const { getByTestId } = render(
      <Button as="div" dataTestId="button">
        {content}
      </Button>
    )

    const button = getByTestId('button')
    expect(button.tagName.toLowerCase()).toBe('div')
  })

  it('should forward as a', () => {
    const { getByTestId } = render(
      <Button as={props => <a {...props} href={content} />} dataTestId="button">
        {content}
      </Button>
    )

    const button = getByTestId('button')

    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveAttribute('href', content)
  })

  it('should forward as Link', () => {
    const { getByTestId } = render(
      <Button as={props => <Link {...props} target="_blank" />} dataTestId="button">
        {content}
      </Button>
    )

    const button = getByTestId('button')
    expect(button.tagName.toLowerCase()).toBe('a')
    expect(button).toHaveAttribute('rel', 'noopener noreferrer') // added by target="_blank" on Link
  })
})
