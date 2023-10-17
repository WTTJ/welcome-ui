import React from 'react'
import { describe, expect, it, vi } from 'vitest'

import { render } from '../../../utils/tests'
import { IconFont } from '../src'

describe('<IconFont>', () => {
  it('should render correctly with existing icon name', () => {
    const consoleWarnMock = vi.spyOn(console, 'warn')
    const { container } = render(<IconFont name="add" size="md" />)
    expect(container).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.warn).not.toBeCalled()
    consoleWarnMock.mockRestore()
  })

  it('should fail rendering silently with unknown icon name', () => {
    const consoleWarnMock = vi.spyOn(console, 'warn')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { container } = render(<IconFont name="unknown" />)
    expect(container).toBeTruthy()
    // eslint-disable-next-line no-console
    expect(console.warn).toBeCalled()
    consoleWarnMock.mockRestore()
  })
})
