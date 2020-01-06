import React from 'react'

import { wrapChildren } from './wrap-children'

const content = 'Jungle'

describe('wrap', () => {
  it('should wrap a string', () => {
    const container = wrapChildren(content)
    expect(container[0].type).toBe('span')
  })

  it('should not wrap a node', () => {
    const container = wrapChildren(<p>content</p>)
    expect(container[0].type).toBe('p')
  })

  it('should not wrap undefined', () => {
    const container = wrapChildren()
    expect(container.length).toBe(0)
  })
})
