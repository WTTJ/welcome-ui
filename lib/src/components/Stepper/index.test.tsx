import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Stepper } from './index'

describe('Stepper', () => {
  it('renders correctly with children', async () => {
    const onClick = vi.fn()

    const { user } = render(
      <Stepper>
        <Stepper.Item isCompleted>Step 1</Stepper.Item>
        <Stepper.Separator />
        <Stepper.Item isOpen>Step 2</Stepper.Item>
        <Stepper.Separator />
        <Stepper.Item onClick={onClick}>Step 3</Stepper.Item>
      </Stepper>
    )

    // Check if elements are rendered
    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()

    // Check icons
    const folderIcon = document.querySelector('use[href="#folder"]')
    expect(folderIcon).toBeInTheDocument()

    const completedIcon = document.querySelector('use[href="#check-circle"]')
    expect(completedIcon).toBeInTheDocument()

    const openIcon = document.querySelector('use[href="#folder-open"]')
    expect(openIcon).toBeInTheDocument()

    const separatorIcon = document.querySelectorAll('use[href="#angle-right-b"]')
    expect(separatorIcon).toHaveLength(2)

    // Click on Step 3
    await user.click(screen.getByText('Step 3'))
    expect(onClick).toHaveBeenCalled()
  })

  it('renders custom icon when provided', () => {
    render(
      <Stepper.Item icon={<span data-testid="custom-icon">Custom Icon</span>}>
        Step with Custom Icon
      </Stepper.Item>
    )

    expect(screen.getByTestId('custom-icon')).toBeInTheDocument()
  })
})
