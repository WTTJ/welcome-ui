import React from 'react'
import { fireEvent } from '@testing-library/react'

import { colors } from '../Core/theme/colors'
import { render } from '../../src/utils/tests'

import { Button } from './index'

const content = 'Jungle'

describe('<Button>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Button dataTestId="button">{content}</Button>)
    const button = getByTestId('button')

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button).toHaveStyleRule('background-color', colors.primary[500])
    expect(button).toHaveStyleRule('height', '2.25rem')
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
    const { getByTestId } = render(
      <Button dataTestId="button" shape="square" size="sm">
        {content}
      </Button>
    )
    const button = getByTestId('button')

    expect(button).toHaveStyleRule('width', '2rem')
    expect(button).toHaveStyleRule('height', '2rem')
  })

  it('should have correct size', () => {
    const { getByTestId } = render(
      <Button dataTestId="button" size="sm">
        {content}
      </Button>
    )
    const button = getByTestId('button')

    expect(button).toHaveStyleRule('height', '2rem')
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
      const { getByTestId } = render(
        <Button dataTestId="button" disabled>
          {content}
        </Button>
      )

      const button = getByTestId('button')

      expect(button).toBeDisabled()
      expect(button).toHaveStyleRule('background-color', '#E8E8E6')
      expect(button).toHaveStyleRule('border-color', '#E8E8E6')
    })
  })
})
