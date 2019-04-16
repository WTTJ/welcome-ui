import React from 'react'

import { render } from '../../utils/tests'

import { Button, LinkButton, HrefButton } from './styles'

test.skip('<Button> renders correctly and has white text by default', () => {
  const button = render(<Button>Test button</Button>).toJSON()
  expect(button).toMatchSnapshot()
  expect(button.children).toContain('Test button')
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#00C29A')
})

test.skip('<Button> has correct colour for mode light', () => {
  const button = render(<Button mode="light">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#C3C3C6')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})

test.skip('<Button> has correct colour for mode dark', () => {
  const button = render(<Button mode="dark">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#2C2D34')
})

test.skip('<Button> has correct colour for mode neutral', () => {
  const button = render(<Button mode="neutral">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#373942')
  expect(button).toHaveStyleRule('background', '#D7D7D9')
})

test.skip('<Button> has correct colour for mode danger', () => {
  const button = render(<Button mode="danger">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#F35454')
  expect(button).toHaveStyleRule('background', '#FFFFFF')
})

test.skip('<Button> has correct colour for mode linkedin', () => {
  const button = render(<Button mode="linkedin">Test button</Button>).toJSON()
  expect(button).toHaveStyleRule('color', '#FFFFFF')
  expect(button).toHaveStyleRule('background', '#0077B5')
})

test.skip('<LinkButton> renders correctly', () => {
  const button = render(<LinkButton to="#nowhere">Link button</LinkButton>).toJSON()
  expect(button.children).toContain('Link button')
  expect(button).toHaveStyleRule('color', '#FFFFFF')
})

test.skip('<HrefButton> renders correctly', () => {
  const button = render(<HrefButton href="#nowhere">Href button</HrefButton>).toJSON()
  expect(button.children).toContain('Href button')
  expect(button).toHaveStyleRule('color', '#FFFFFF')
})
