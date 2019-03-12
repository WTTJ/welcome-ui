import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { mount, shallow } from '../../test/support'

import { Button, LinkButton, HrefButton } from './button.styled'

test('<Button> renders correctly and has white text by default', () => {
  const button = shallow(<Button>Test button</Button>)
  expect(button.text()).to.equal('Test button')
  expect(button).toHaveStyleRule('color', '#ffffff')
  expect(button).toHaveStyleRule('background', '#00c29a')
})

test('<Button> has correct colour for mode light', () => {
  const button = shallow(<Button mode="light">Test button</Button>)
  expect(button).toHaveStyleRule('color', '#97999d')
})

test('<Button> has correct colour for mode dark', () => {
  const button = shallow(<Button mode="dark">Test button</Button>)
  expect(button).toHaveStyleRule('color', '#ffffff')
})

test('<Button> has correct colour for mode neutral', () => {
  const button = shallow(<Button mode="neutral">Test button</Button>)
  expect(button).toHaveStyleRule('color', '#97999d')
})

test('<Button> has correct colour for mode danger', () => {
  const button = shallow(<Button mode="danger">Test button</Button>)
  expect(button).toHaveStyleRule('color', '#d32f2f')
})

test('<Button> has correct colour for mode linkedin', () => {
  const button = shallow(<Button mode="linkedin">Test button</Button>)
  expect(button).toHaveStyleRule('color', '#ffffff')
})

test('<LinkButton> renders correctly', () => {
  const button = mount(
    <MemoryRouter>
      <LinkButton to="#nowhere">Link button</LinkButton>
    </MemoryRouter>
  )
  expect(button.text()).to.equal('Link button')
  expect(button).toHaveStyleRule('color', '#ffffff')
})

test('<HrefButton> renders correctly', () => {
  const button = mount(
    <MemoryRouter>
      <HrefButton href="#nowhere">Href button</HrefButton>
    </MemoryRouter>
  )
  expect(button.text()).to.equal('Href button')
  expect(button).toHaveStyleRule('color', '#ffffff')
})
