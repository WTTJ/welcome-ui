import React from 'react'
import { describe, expect, it } from 'vitest'

import { render } from '../../../utils/tests'
import { Text } from '../src'

const content = 'Jungle'
const longContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis viverra lectus, vel tristique turpis. Vivamus magna nulla, elementum in feugiat feugiat, egestas eget nibh. Ut ac justo vitae dolor iaculis gravida. In eu nisl lorem. Cras eu mauris et tortor suscipit accumsan. Duis ullamcorper nisl a justo ultricies, eu consequat risus imperdiet. Phasellus at metus cursus, fringilla tortor eu, scelerisque quam. Donec efficitur porta elit ac malesuada.'

describe('<Text>', () => {
  it('should render correctly', () => {
    const { container, getByTestId } = render(<Text dataTestId="text">{content}</Text>)
    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a p element
    expect(container.querySelector('p')).toBeInTheDocument()
    expect(text).toHaveStyleRule('font-size', '1rem')
  })

  it('should render correctly with a variant', () => {
    const { container, getByTestId } = render(
      <Text dataTestId="text" variant="h1">
        {content}
      </Text>
    )
    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a h1 element
    expect(container.querySelector('h1')).toBeInTheDocument()
    expect(text).toHaveStyleRule('font-size', '2.25rem')
  })

  it('should render correctly with a as property', () => {
    const { container, getByTestId } = render(
      <Text as="div" dataTestId="text" variant="h1">
        {content}
      </Text>
    )
    const text = getByTestId('text')

    expect(text).toHaveTextContent(content)
    // check if is a div element
    expect(container.querySelector('h1')).not.toBeInTheDocument()
    expect(container.querySelector('div')).toBeInTheDocument()
  })

  it('should render correctly when truncated', () => {
    const { container, getByTestId } = render(
      <Text dataTestId="text" lines={3}>
        {longContent}
      </Text>
    )
    const text = getByTestId('text')

    expect(text).toHaveTextContent(longContent)
    // check if is a div element
    expect(container.querySelector('p')).toBeInTheDocument()
    expect(text).toHaveStyleRule('overflow', 'hidden')
    expect(text).toHaveStyleRule('-webkit-line-clamp', '3')
  })
})
