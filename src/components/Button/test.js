import React from 'react'

import { render } from '../../utils/tests'

import { Button } from './index'

const content = 'Test button'

test('<Button> renders correctly and has white text by default', () => {
  const button = render(<Button>{content}</Button>).toJSON()
  expect(button).toMatchSnapshot()
  expect(button.children).toContain(content)
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#208DDB')
})

test('<Button> has correct colour for variant primary', () => {
  const button = render(<Button variant="primary">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#208DDB')
})

test('<Button> has correct colour for variant secondary', () => {
  const button = render(<Button variant="secondary">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#1B74B5')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})

test('<Button> has correct colour for variant tertiary', () => {
  const button = render(<Button variant="tertiary">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#333333')
})

test('<Button> has correct colour for variant disabled', () => {
  const button = render(<Button variant="disabled">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#000000')
  expect(button).toHaveStyleRule('background', '#CCCCCC')
})

test('<Button> has correct colour for variant primary-danger', () => {
  const button = render(<Button variant="primary-danger">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#EA2A2D')
})

test('<Button> has correct colour for variant secondary-danger', () => {
  const button = render(<Button variant="secondary-danger">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#EA2A2D')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})

test('<Button> has correct colour for variant primary-warning', () => {
  const button = render(<Button variant="primary-warning">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#EE8434')
})

test('<Button> has correct colour for variant secondary-warning', () => {
  const button = render(<Button variant="secondary-warning">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#EE8434')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})
