import React from 'react'
import { describe, expect, it } from 'vitest'

import { render } from '../../../utils/tests'
import { createTheme } from '../../Core/src/theme/core'
import { Tag } from '../src'

const content = 'Jungle'

const theme = createTheme()

const heightTagMd = theme.tags.sizes.md.height

describe('<Tag>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Tag dataTestId="tag">{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveTextContent(content)
    expect(tag).toHaveStyleRule('background-color', theme.colors['nude-200'])
    expect(tag).toHaveStyleRule('color', theme.colors['nude-900'])
    expect(tag).toHaveStyleRule('padding', theme.tags.sizes.md.padding)
  })

  it('should have correct size', () => {
    const { getByTestId } = render(
      <Tag dataTestId="tag" size="md">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('padding', theme.tags.sizes.md.padding)
  })

  it('should have correct color for success variant', () => {
    const { getByTestId } = render(
      <Tag dataTestId="tag" variant="success">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('background-color', theme.colors['success-100'])
  })

  it('should have correct color for sub variant', () => {
    const { getByTestId } = render(
      <Tag dataTestId="tag" variant="1">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('background-color', theme.colors['sub-1'])
  })

  describe('should have correct size with only one character', () => {
    it('with string', () => {
      const { getByTestId } = render(<Tag dataTestId="tag">1</Tag>)
      const tag = getByTestId('tag')

      expect(tag).toHaveStyleRule('width', heightTagMd)
      expect(tag).toHaveStyleRule('height', heightTagMd)
      expect(tag).toHaveStyleRule('padding', '0')
    })

    it('with integer', () => {
      const { getByTestId } = render(<Tag dataTestId="tag">{1}</Tag>)
      const tag = getByTestId('tag')

      expect(tag).toHaveStyleRule('width', heightTagMd)
      expect(tag).toHaveStyleRule('height', heightTagMd)
      expect(tag).toHaveStyleRule('padding', '0')
    })

    it('with zero', () => {
      const { getByTestId } = render(<Tag dataTestId="tag">{0}</Tag>)
      const tag = getByTestId('tag')

      expect(tag).toHaveStyleRule('width', heightTagMd)
      expect(tag).toHaveStyleRule('height', heightTagMd)
      expect(tag).toHaveStyleRule('padding', '0')
    })
  })
})
