import React from 'react'
import { describe, expect, it } from 'vitest'

import { render } from '../../../utils/tests'
import { Emoji } from '../src'

describe('<Emoji>', () => {
  it("shouldn't render when not passing an emoji", () => {
    const { container } = render(<Emoji />)
    expect(container).toBeEmptyDOMElement()
  })

  it('should render the emoji when passing a string', () => {
    let { getByAltText } = render(<Emoji emoji=":dog:" />)
    expect(getByAltText('dog')).toBeDefined()
    ;({ getByAltText } = render(<Emoji emoji="potato" />))
    expect(getByAltText('potato')).toBeDefined()
  })

  it('should render the emoji when passing a URL', () => {
    const { container } = render(<Emoji emoji="http://example.com" />)
    const emoji = container.children[0]
    expect(emoji).toBeDefined()
  })
})
