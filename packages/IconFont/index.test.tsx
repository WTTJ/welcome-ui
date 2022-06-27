import React from 'react'
import { vi } from 'vitest'

import { render } from '../../utils/tests'

import { IconFont } from './index'

describe('<IconFont>', () => {
  it('should render correctly with existing icon name', () => {
    const consoleWarnMock = vi.spyOn(console, 'warn')
    const { container } = render(<IconFont name="add" />)
    expect(container).toBeTruthy()
    expect(consoleWarnMock).not.toBeCalled()
  })

  it('should fail rendering silently with unknown icon name', () => {
    const consoleWarnMock = vi.spyOn(console, 'warn')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { container } = render(<IconFont name="unknown" />)
    expect(container).toBeTruthy()
    expect(consoleWarnMock).toHaveBeenCalledWith("Invalid icon name 'unknown'")
  })
})
