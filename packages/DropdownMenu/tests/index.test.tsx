import React from 'react'
import { describe, expect, it, test } from 'vitest'
import { renderHook } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'

import { render } from '../../../utils/tests'
import { DropdownMenu, useDropdownMenu } from '../src'

const content = 'jungle'

describe('<DropdownMenu>', () => {
  it('should render correctly', () => {
    const dataTestId = 'dropdownMenu'
    const {
      result: { current: dropdownMenu },
    } = renderHook(() => useDropdownMenu({ open: true }))

    const { getByTestId } = render(
      <DropdownMenu dataTestId={dataTestId} store={dropdownMenu}>
        {content}
      </DropdownMenu>
    )
    const dropdown = getByTestId(dataTestId)

    expect(dropdown).toHaveTextContent(content)
  })

  test.each([
    ['md', 12],
    ['xxl', 32],
    [10, 10],
    ['not a space', 0],
  ] as const)('should render the gutter correctly - %s (%i)', async (gutter, expected) => {
    const triggerDataTestId = 'trigger'
    const dropdownDataTestId = 'menu'
    const {
      result: { current: dropdownMenu },
    } = renderHook(() => useDropdownMenu({ open: true }))

    const { getByTestId } = render(
      <>
        <DropdownMenu.Trigger data-testId={triggerDataTestId} store={dropdownMenu} />
        <DropdownMenu dataTestId={dropdownDataTestId} gutter={gutter} store={dropdownMenu}>
          {content}
        </DropdownMenu>
      </>
    )
    const trigger = getByTestId(triggerDataTestId)
    const dropdown = getByTestId(dropdownDataTestId)

    await userEvent.click(trigger)

    const { transform } = getComputedStyle(dropdown.parentElement)
    const y = parseInt(
      transform.match(/translate3d\(\d*(?:px)?,(\d*)(?:px)?,\d*(?:px)?\)/)?.[1],
      10
    )
    expect(y).toBe(expected)
  })
})
