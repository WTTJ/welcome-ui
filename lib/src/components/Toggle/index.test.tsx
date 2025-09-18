import { fireEvent, screen } from '@testing-library/react'
import React from 'react'

import { render } from '@tests'

import { Toggle } from './'

const StateControlledExample = () => {
  const [toggle, setToggle] = React.useState(false)

  const checkedIcon = <span data-testid="checked-icon" />
  const uncheckedIcon = <span data-testid="unchecked-icon" />

  return (
    <Toggle
      checked={toggle}
      checkedIcon={checkedIcon}
      onClick={() => setToggle(!toggle)}
      uncheckedIcon={uncheckedIcon}
    />
  )
}

describe('<Toggle>', () => {
  it('should render the correct icon based on the checked state', () => {
    render(<StateControlledExample />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox).toHaveAttribute('aria-checked', 'false')
    expect(screen.getByTestId('unchecked-icon')).toBeInTheDocument()

    fireEvent.click(checkbox)

    expect(checkbox).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByTestId('checked-icon')).toBeInTheDocument()
  })

  it('should be disabled when the disabled prop is present', () => {
    render(<Toggle disabled />)

    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('should call onClick when clicked', () => {
    const onClick = vi.fn()
    render(<Toggle onClick={onClick} />)

    fireEvent.click(screen.getByRole('checkbox'))

    expect(onClick).toHaveBeenCalled()
  })

  it('should have the correct class names based on props', () => {
    render(<Toggle className="custom-class" size="xs" />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox.className).toContain('root')
    expect(checkbox.className).toContain('size-xs')
    expect(checkbox.className).toContain('custom-class')
  })
})
