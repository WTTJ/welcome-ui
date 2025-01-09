import React from 'react'

import { render } from '../../../../tests'
import { IconFont } from '../'

describe('<IconFont>', () => {
  it('should render correctly with existing icon name', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation()
    const { container } = render(<IconFont.Add size="md" />)
    expect(container).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.warn).not.toBeCalled()
    consoleWarnMock.mockRestore()
  })
})
