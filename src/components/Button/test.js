import React from 'react'

import { render } from '../../utils/tests'

import { Button } from './index'

test('<Button> renders correctly and has white text by default', () => {
  const button = render(<Button>Test button</Button>).toJSON()
  expect(button).toMatchSnapshot()
  expect(button.children).toContain('Test button')
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#00C29A')
})

test('<Button> has correct colour for variant primary', () => {
  const button = render(<Button variant="primary">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#00C29A')
})

test('<Button> has correct colour for variant secondary', () => {
  const button = render(<Button variant="secondary">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#73747B')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})

test('<Button> has correct colour for variant tertiary', () => {
  const button = render(<Button variant="tertiary">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#999999')
})

test('<Button> has correct colour for variant disabled', () => {
  const button = render(<Button variant="disabled">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#26272E')
  expect(button).toHaveStyleRule('background', '#EEECE8')
})

test('<Button> has correct colour for variant primary-danger', () => {
  const button = render(<Button variant="primary-danger">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#F35454')
})

test('<Button> has correct colour for variant secondary-danger', () => {
  const button = render(<Button variant="secondary-danger">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#F35454')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})

test('<Button> has correct colour for variant primary-warning', () => {
  const button = render(<Button variant="primary-warning">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#FFAF51')
})

test('<Button> has correct colour for variant secondary-warning', () => {
  const button = render(<Button variant="secondary-warning">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFAF51')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})
