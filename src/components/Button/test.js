import React from 'react'

import { render } from '../../utils/tests'

import { Button } from './index'

const content = 'Test button'

test('<Button> renders correctly', () => {
  const button = render(<Button>{content}</Button>).toJSON()
  expect(button).toMatchSnapshot()
  expect(button.children).toContain('Test button')
  expect(button).toHaveStyleRule('color', '#FAFAFA')
  expect(button).toHaveStyleRule('background-color', '#1B74B5')
})

test('Disabled <Button> renders correctly', () => {
  const button = render(
    <Button disabled variant="primary">
      Test button
    </Button>
  ).toJSON()
  expect(button).toHaveStyleRule('color', '#FAFAFA')
  expect(button).toHaveStyleRule('background-color', '#1B74B5')
})

test('<Button> has correct colour for variant primary', () => {
  const button = render(<Button variant="primary">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FAFAFA')
  expect(button).toHaveStyleRule('background-color', '#1B74B5')
})

test('<Button> has correct colour for variant secondary', () => {
  const button = render(<Button variant="secondary">{content}</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#1B74B5')
  expect(button).toHaveStyleRule('background-color', '#FAFAFA')
})

test('<Button> has correct colour for variant tertiary', () => {
  const button = render(<Button variant="tertiary">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FAFAFA')
  expect(button).toHaveStyleRule('background-color', '#333333')
})

test('<Button> has correct colour for variant disabled', () => {
  const button = render(<Button variant="disabled">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#A0A0A0')
  expect(button).toHaveStyleRule('background-color', '#CCCCCC')
})

test('<Button> has correct colour for variant primary-danger', () => {
  const button = render(<Button variant="primary-danger">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FAFAFA')
  expect(button).toHaveStyleRule('background-color', '#D62327')
})

test('<Button> has correct colour for variant secondary-danger', () => {
  const button = render(<Button variant="secondary-danger">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#D62327')
  expect(button).toHaveStyleRule('background-color', '#FAFAFA')
})

test('<Button> has correct colour for variant primary-warning', () => {
  const button = render(<Button variant="primary-warning">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FAFAFA')
  expect(button).toHaveStyleRule('background-color', '#D6772F')
})

test('<Button> has correct colour for variant secondary-warning', () => {
  const button = render(<Button variant="secondary-warning">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#D6772F')
  expect(button).toHaveStyleRule('background-color', '#FAFAFA')
})
