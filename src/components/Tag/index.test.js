import React from 'react'

import { render } from '../../utils/tests'

import { Tag } from './index'

const content = 'Jungle'

describe('<Tag>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Tag>{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveTextContent(content)
    expect(tag).toHaveStyleRule('background-color', '#c4c4c4')
    expect(tag).toHaveStyleRule('color', '#727272')
    expect(tag).toHaveStyleRule('padding', '0.28125rem 0.375rem')
  })

  it('should have correct size', () => {
    const { getByTestId } = render(<Tag size="lg">{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('padding', '0.40625rem 0.5rem')
  })

  it('should have correct color', () => {
    const { getByTestId } = render(<Tag variant="turquoize">{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('background-color', '#3FD1C1')
    expect(tag).toHaveStyleRule('color', '#FFFFFF')
  })

  it('should have correct size with only one character', () => {
    const { getByTestId } = render(<Tag>1</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('width', '1.82em')
    expect(tag).toHaveStyleRule('height', '1.82em')
    expect(tag).toHaveStyleRule('padding', '0')
  })

  it('should have correct border radius for tag with prop `shape` set to `circle`', () => {
    const { getByTestId } = render(<Tag shape="circle">{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('border-radius', '50%')
  })
})
