import { screen } from '@testing-library/react'

import { Button } from '@/components/Button'
import { FloatingActionBar } from '@/components/FloatingActionBar'

import { render } from '@tests'

describe('<FloatingActionBar>', () => {
  it('should render correctly', () => {
    render(
      <FloatingActionBar dataTestId="floating-action-bar">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Save</Button>
      </FloatingActionBar>
    )

    const bar = screen.getByTestId('floating-action-bar')
    const cancelButton = screen.getByText('Cancel')
    const saveButton = screen.getByText('Save')

    expect(bar).toBeInTheDocument()
    expect(cancelButton).toBeInTheDocument()
    expect(saveButton).toBeInTheDocument()
  })
})
