import React from 'react'

import { render } from '../../utils/tests'

import { TabsPanel } from './index'

const content = 'Jungle'

describe('<TabsPanel>', () => {
  it('should render correctly', () => {
    const { container } = render(<TabsPanel>{content}</TabsPanel>)

    expect(container).toHaveTextContent(content)
  })
})
