import React from 'react'

import { render } from '../../../../tests'
import { IconsFont } from '../'

describe('<IconsFont>', () => {
  it('should render correctly with existing icon name', () => {
    const consoleWarnMock = jest.spyOn(console, 'warn').mockImplementation()
    const { container } = render(<IconsFont.Add size="md" />)
    expect(container).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.warn).not.toBeCalled()
    consoleWarnMock.mockRestore()
  })
})
