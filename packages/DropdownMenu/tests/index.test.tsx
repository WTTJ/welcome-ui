import React from 'react'
import { act, renderHook, screen, waitFor } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { DropdownMenu, useDropdownMenu } from '../src'

const content = 'jungle'

describe('<DropdownMenu>', () => {
  it('should render correctly', () => {
    const dataTestId = 'dropdownMenu'
    const {
      result: { current: dropdownMenu },
    } = renderHook(() => useDropdownMenu({ open: true }))

    render(
      <DropdownMenu dataTestId={dataTestId} store={dropdownMenu}>
        {content}
      </DropdownMenu>
    )

    const dropdown = screen.getByTestId(dataTestId)

    expect(dropdown).toHaveTextContent(content)
  })

  test.each([
    ['md', 12],
    ['xxl', 32],
    [10, 10],
    ['not a space', 0],
  ])('should render the gutter correctly - %s (%i)', async (gutter, expected) => {
    const triggerDataTestId = 'trigger'
    const dropdownDataTestId = 'menu'
    const {
      result: { current: dropdownMenu },
    } = renderHook(() => useDropdownMenu({ open: true }))

    const { user } = render(
      <>
        <DropdownMenu.Trigger data-testid={triggerDataTestId} store={dropdownMenu} />
        <DropdownMenu dataTestId={dropdownDataTestId} gutter={gutter} store={dropdownMenu}>
          {content}
        </DropdownMenu>
      </>
    )
    const trigger = screen.getByTestId(triggerDataTestId)
    const dropdown = screen.getByTestId(dropdownDataTestId)

    await act(() => user.click(trigger))

    await waitFor(() => {
      const { transform } = getComputedStyle(dropdown.parentElement as HTMLElement)

      expect(transform).toBe(`translate3d(0px,${expected}px,0)`)
    })
  })
})
