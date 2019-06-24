import React from 'react'

import { render } from '../../utils/tests'

import { TabsItem } from './index'

const content = 'Jungle'

describe('<TabsItem>', () => {
  it('should render correctly', () => {
    // mock useTabState from Reakit/Tab
    const mockTabFromReakit = {
      stops: [{ id: 1, ref: { current: '<div></div>' } }],
      register: jest.fn(),
      unregister: jest.fn()
    }
    const { container } = render(<TabsItem {...mockTabFromReakit}>{content}</TabsItem>)

    expect(container).toHaveTextContent(content)
  })
})
