import React from 'react'

import { render } from '../../utils/tests'

import { Text } from './index'

const content = 'Jungle'

describe('<Text>', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(<Text>{content}</Text>)
    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a p element
    expect(container.querySelector('p')).toBeInTheDocument()
    expect(text).toHaveStyleRule('font-size', '1.0625rem')
  })

  it('should render correctly with a variant', () => {
    const { container, getByTestId } = render(<Text variant="h1">{content}</Text>)
    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a h1 element
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(text).toHaveStyleRule('font-size', '2.25rem')
  })

  it('should render correctly with a as property', () => {
    const { container, getByTestId } = render(
      <Text as="div" variant="h1">
        {content}
      </Text>
    )
    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a div element
    expect(container.querySelector('h1')).not.toBeInTheDocument()
    expect(container.querySelector('div')).toBeInTheDocument()
  })
})
