import { describe, expect, it } from 'vitest'

import { getStackClassnames, parsePropsString } from './parsing.mjs'

describe('getStackClassnames', () => {
  it('adds flex and flex-col if not present', () => {
    expect(getStackClassnames([])).toEqual(['flex', 'flex-col'])
    expect(getStackClassnames(['foo'])).toEqual(['flex', 'flex-col', 'foo'])
  })

  it('does not duplicate flex or flex-col', () => {
    expect(getStackClassnames(['flex', 'flex-col'])).toEqual(['flex', 'flex-col'])
    expect(getStackClassnames(['flex'])).toEqual(['flex', 'flex-col'])
    expect(getStackClassnames(['flex-col'])).toEqual(['flex', 'flex-col'])
  })
})

describe('parsePropsString', () => {
  it('parses string and boolean props', () => {
    expect(parsePropsString('foo="bar" required')).toEqual({
      foo: { isExpression: false, value: 'bar' },
      required: { isExpression: false, value: true },
    })
  })

  it('parses expression props', () => {
    expect(parsePropsString('foo={1+2}')).toEqual({
      foo: { isExpression: true, value: '1 + 2' },
    })
  })

  it('parses spread props', () => {
    const result = parsePropsString('{...props} foo="bar"')
    expect(result.__spread0__).toEqual({ isSpread: true, value: 'props' })
    expect(result.foo).toEqual({ isExpression: false, value: 'bar' })
  })

  it('returns empty object for invalid input', () => {
    expect(parsePropsString('foo=')).toEqual({})
  })
})
