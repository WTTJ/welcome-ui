import React, { useState } from 'react'
import { fireEvent, renderHook, screen, waitFor } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { DropdownMenu, type DropdownMenuProps, useDropdownMenu } from '../src'

const content = 'jungle'
const triggerDataTestId = 'trigger'
const dropdownDataTestId = 'menu'

const options = [
  { value: 1, label: 'one' },
  { value: 2, label: 'two' },
  { value: 3, label: 'three' },
  { value: 4, label: 'four' },
  { value: 5, label: 'five' },
]

const DropdownRenderer: React.FC<DropdownMenuProps> = () => {
  const dropdownMenu = useDropdownMenu()

  const [selected, setSelected] = useState('one')

  const handleChange = (value: string) => {
    setSelected(value)
  }

  return (
    <>
      <DropdownMenu.Trigger
        data-testid={triggerDataTestId}
        id={triggerDataTestId}
        store={dropdownMenu}
      >
        {selected}
      </DropdownMenu.Trigger>
      <DropdownMenu dataTestId={dropdownDataTestId} id={dropdownDataTestId} store={dropdownMenu}>
        {options.map(item => (
          <DropdownMenu.Item
            id={item.label}
            key={item.label}
            onClick={() => handleChange(item.label)}
          >
            {item.label}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu>
    </>
  )
}

describe('<DropdownMenu>', () => {
  test('should render correctly', () => {
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

  test('should handle click item', async () => {
    render(<DropdownRenderer />)

    const trigger = screen.getByTestId(triggerDataTestId)
    await fireEvent.click(trigger)

    const dropdownMenuItemToDropdown = screen.getByRole('menuitem', { name: 'four' })
    expect(dropdownMenuItemToDropdown).toBeInTheDocument()

    // Why fireEvent ? https://github.com/testing-library/user-event/discussions/1156
    await fireEvent.click(dropdownMenuItemToDropdown)

    expect(trigger).toHaveTextContent('four')
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

    render(
      <>
        <DropdownMenu.Trigger data-testid={triggerDataTestId} store={dropdownMenu} />
        <DropdownMenu dataTestId={dropdownDataTestId} gutter={gutter} store={dropdownMenu}>
          {content}
        </DropdownMenu>
      </>
    )
    const trigger = screen.getByTestId(triggerDataTestId)
    const dropdown = screen.getByTestId(dropdownDataTestId)

    fireEvent.click(trigger)

    await waitFor(() => {
      const { transform } = getComputedStyle(dropdown.parentElement as HTMLElement)

      expect(transform).toBe(`translate3d(0px,${expected}px,0)`)
    })
  })
})
