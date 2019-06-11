import React from 'react'

import { fireEvent, render } from '../../utils/tests'

import { Button } from './index'

const content = 'Jungle'

describe('<Button>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Button>{content}</Button>)
    const button = getByTestId('button')

    expect(button).toHaveTextContent(content)
    expect(button).not.toBeDisabled()
    expect(button).toHaveStyleRule('background-color', '#1B74B5')
    expect(button).toHaveStyleRule('height', '2.25rem')
  })

  it('should call onClick property', () => {
    const onClick = jest.fn()
    const { getByText } = render(<Button onClick={onClick}>{content}</Button>)

    const eventElement = getByText(content)
    fireEvent.click(eventElement)

    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should have correct size', () => {
    const { getByTestId } = render(<Button size="sm">{content}</Button>)
    const button = getByTestId('button')

    expect(button).toHaveStyleRule('height', '2rem')
  })

  describe('disabled', () => {
    it('should not call onClick property', () => {
      const onClick = jest.fn()
      const { getByText } = render(
        <Button disabled onClick={onClick}>
          {content}
        </Button>
      )

      const eventElement = getByText(content)
      fireEvent.click(eventElement)

      expect(onClick).toHaveBeenCalledTimes(0)
    })

    it('should have disabled attribute', () => {
      const { getByTestId } = render(<Button disabled>{content}</Button>)

      const button = getByTestId('button')

      expect(button).toBeDisabled()
      expect(button).toHaveStyleRule('background-color', '#CCCCCC')
    })
  })
})
