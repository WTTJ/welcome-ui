import React from 'react'

import { render } from '../../utils/tests'

import { DummyComponent } from './index'

test('<DummyComponent> renders correctly and has light background', () => {
  const dummy = render(<DummyComponent>Test</DummyComponent>).toJSON()
  expect(dummy.children).toContain('Test')
  expect(dummy).toHaveStyleRule('color', '#26272E')
  expect(dummy).toHaveStyleRule('background', '#FFFFFF')
})
