import React from 'react'

import { render } from '../../utils/tests'

import { IconFont } from './index'

describe('<IconFont>', () => {
  it('should render correctly with existing icon name', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation()
    const { container } = render(<IconFont name="add" />)
    expect(container).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.warn).not.toBeCalled()
    consoleWarnMock.mockRestore()
  })

  it('should fail rendering silently with unknown icon name', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation()
    const { container } = render(<IconFont name="unknown" />)
    expect(container).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.warn).toBeCalled()
    consoleWarnMock.mockRestore()
  })
})
