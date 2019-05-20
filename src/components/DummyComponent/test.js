import React from 'react'

import { render } from '../../utils/tests'

import { DummyComponent } from './index'

test('<DummyComponent> renders correctly and has light background', () => {
  const content = 'Test'
  const dummy = render(<DummyComponent>{content}</DummyComponent>).toJSON()
  expect(dummy.children).toContain('Test')
  expect(dummy).toHaveStyleRule('color', '#CCCCCC')
  expect(dummy).toHaveStyleRule('background', '#FAFAFA')
})
