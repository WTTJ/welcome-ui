import React from 'react'
import { describe, expect, it } from 'vitest'

import { wrapChildren } from '../src'

const content = 'Jungle'

describe('wrap', () => {
  it('should wrap a string', () => {
    const container = wrapChildren(content)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    expect(container[0].type).toBe('span')
  })

  it('should not wrap a node', () => {
    const container = wrapChildren(<p>content</p>)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    expect(container[0].type).toBe('p')
  })

  it('should not wrap undefined', () => {
    const container = wrapChildren()
    expect((container as string).length).toBe(0)
  })
})
