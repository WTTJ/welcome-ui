import React from 'react'

import { render } from '../../utils/tests'

import { Tooltip } from './index'

describe('<Tooltip />', () => {
  test('should not render tooltip element when state isShow is set to false', () => {
    const tooltip = render(<Tooltip accessibilityId="test">this is a tooltip</Tooltip>).toJSON()
    expect(tooltip.children).toEqual(null)
  })

  //TODO
  //should render tooltip element when state isShow is set to true
})
