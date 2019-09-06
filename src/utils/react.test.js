import React from 'react'

import { wrap } from './react'

const content = 'Jungle'

describe.only('wrap', () => {
  it('should wrap a string', () => {
    const container = wrap(content)
    expect(container[0].type).toBe('span')
  })

  it('should not wrap a node', () => {
    const container = wrap(<p>content</p>)
    expect(container[0].type).toBe('p')
  })

  it('should not wrap undefined', () => {
    const container = wrap()
    expect(container.length).toBe(0)
  })
})
