import React from 'react'

import { IconsFont } from '../'
import { render } from '../../../../tests'

describe('<IconsFont>', () => {
  it('should render correctly with existing icon name', () => {
    const consoleWarnMock = vi.spyOn(console, 'warn')
    const { container } = render(<IconsFont.Add size="md" />)

    expect(container).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.warn).not.toBeCalled()

    consoleWarnMock.mockRestore()
  })
})
