import { screen } from '@testing-library/react'

import { DropdownMenu } from '@/components/DropdownMenu'
import { FloatingActionBar } from '@/components/FloatingActionBar'

import { render } from '@tests'

describe('<FloatingActionBar>', () => {
  it('should render correctly', () => {
    render(
      <FloatingActionBar dataTestId="floating-action-bar">
        <FloatingActionBar.Button variant="secondary">Cancel</FloatingActionBar.Button>
        <FloatingActionBar.Button variant="primary">Save</FloatingActionBar.Button>
      </FloatingActionBar>
    )

    const bar = screen.getByTestId('floating-action-bar')
    const cancelButton = screen.getByText('Cancel')
    const saveButton = screen.getByText('Save')

    expect(bar).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })

  it('should render button with icon', () => {
    render(
      <FloatingActionBar dataTestId="floating-action-bar">
        <FloatingActionBar.Button icon={<span data-testid="save-icon" />} variant="primary">
          Save
        </FloatingActionBar.Button>
      </FloatingActionBar>
    )

    const saveButton = screen.getByText('Save')
    const icon = screen.getByTestId('save-icon')

    expect(saveButton).toBeInTheDocument()
    expect(icon).toBeInTheDocument()
  })

  it('should render with pagination', () => {
    const handleChange = vi.fn()
    render(
      <FloatingActionBar>
        <FloatingActionBar.Pagination
          dataTestId="pagination"
          onChange={handleChange}
          page={1}
          pageCount={3}
        />
        <FloatingActionBar.Button variant="primary">Save</FloatingActionBar.Button>
      </FloatingActionBar>
    )

    const pagination = screen.getByTestId('pagination')
    expect(pagination).toBeInTheDocument()
  })

  it('should render with actions dropdown', () => {
    render(
      <FloatingActionBar>
        <FloatingActionBar.Button variant="primary">Save</FloatingActionBar.Button>
        <FloatingActionBar.Actions dataTestId="dropdown-actions">
          <DropdownMenu.Item>Action 3</DropdownMenu.Item>
          <DropdownMenu.Item>Action 4</DropdownMenu.Item>
        </FloatingActionBar.Actions>
      </FloatingActionBar>
    )

    const dropdownTrigger = screen.getByTestId('dropdown-actions-menu')
    expect(dropdownTrigger).toBeInTheDocument()
  })
})
