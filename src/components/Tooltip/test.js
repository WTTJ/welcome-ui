import React from 'react'

import { render } from '../../utils/tests'

import { Tooltip } from './index'

describe('<Tooltip />', () => {
  test('should not render tooltip element when state isShow is set to false', () => {
    const content = 'This is a tooltip'
    const tooltip = render(<Tooltip accessibilityId="test">{content}</Tooltip>).toJSON()
    expect(tooltip.children).toEqual(null)
  })

  //TODO
  //should render tooltip element when state isShow is set to true
})
