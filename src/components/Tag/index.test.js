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

  it('should have same height and width when prop `shape` set to `square`', () => {
    const { getByTestId } = render(<Tag shape="square">{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('width', '1.82em')
    expect(tag).toHaveStyleRule('height', '1.82em')
  })

  it('should have same height and width when prop `shape` set to `square` and different width / height props', () => {
    const { getByTestId } = render(
      <Tag height={10} shape="square" width={50}>
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('width', '50px')
    expect(tag).toHaveStyleRule('height', '50px')
  })

  it('should have same height and width when prop `shape` set to `square` and width prop only', () => {
    const { getByTestId } = render(
      <Tag shape="square" width="4rem">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('width', '4rem')
    expect(tag).toHaveStyleRule('height', '4rem')
  })

  it('should have same height and width when prop `shape` set to `square` and height prop only', () => {
    const { getByTestId } = render(
      <Tag height={10} shape="square">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('width', '10px')
    expect(tag).toHaveStyleRule('height', '10px')
  })

  it('should have correct border radius when prop `shape` set to `circle`', () => {
    const { getByTestId } = render(<Tag shape="circle">{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveStyleRule('border-radius', '50%')
  })
})
