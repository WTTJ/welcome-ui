import { renderHook, screen, waitFor } from '@testing-library/react'
import { useState } from 'react'

import { render } from '@tests'

import { DropdownMenu, useDropdownMenu } from '../index'

const content = 'jungle'
const triggerDataTestId = 'trigger'
const dropdownDataTestId = 'menu'

const options = [
  { label: 'one', value: 1 },
  { label: 'two', value: 2 },
  { label: 'three', value: 3 },
  { label: 'four', value: 4 },
  { label: 'five', value: 5 },
]

const DropdownRenderer = () => {
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

  it('should handle click item', async () => {
    const { user } = render(<DropdownRenderer />)

    const trigger = screen.getByTestId(triggerDataTestId)

    await user.click(trigger)

    const dropdownMenuItemToDropdown = screen.getByRole('menuitem', { name: 'four' })
    expect(dropdownMenuItemToDropdown).toBeInTheDocument()

    await user.click(dropdownMenuItemToDropdown)

    expect(trigger).toHaveTextContent('four')
  })

  it('should render a 0px gutter', async () => {
    const triggerDataTestId = 'trigger'
    const dropdownDataTestId = 'menu'
    const {
      result: { current: dropdownMenu },
    } = renderHook(() => useDropdownMenu({ open: true }))

    const { user } = render(
      <>
        <DropdownMenu.Trigger data-testid={triggerDataTestId} store={dropdownMenu} />
        <DropdownMenu dataTestId={dropdownDataTestId} store={dropdownMenu} withGutter={false}>
          {content}
        </DropdownMenu>
      </>
    )
    const trigger = screen.getByTestId(triggerDataTestId)
    const dropdown = screen.getByTestId(dropdownDataTestId)

    await user.click(trigger)

    await waitFor(() => {
      const { transform } = getComputedStyle(dropdown.parentElement as HTMLElement)

      expect(transform).toBe(`translate3d(0px,0px,0)`)
    })
  })
})
