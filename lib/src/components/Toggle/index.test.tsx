import { screen } from '@testing-library/react'
import React from 'react'

import { render } from '@tests'

import { Toggle } from './'

const StateControlledExample = () => {
  const [toggle, setToggle] = React.useState(false)

  return <Toggle checked={toggle} onClick={() => setToggle(!toggle)} withVisibilityIcon />
}

describe('<Toggle>', () => {
  it('should render the correct icon based on the checked state', async () => {
    const { user } = render(<StateControlledExample />)

    const checkbox = screen.getByRole('checkbox')
    const eyeSlashIcon = document.querySelector('use[href="#eye-slash"]')

    expect(checkbox).toHaveAttribute('aria-checked', 'false')
    expect(eyeSlashIcon).toBeInTheDocument()

    await user.click(checkbox)

    const eyeIcon = document.querySelector('use[href="#eye"]')

    expect(checkbox).toHaveAttribute('aria-checked', 'true')
    expect(eyeIcon).toBeInTheDocument()
  })

  it('should be disabled when the disabled prop is present', () => {
    render(<Toggle disabled />)

    expect(screen.getByRole('checkbox')).toBeDisabled()
  })

  it('should call onClick when clicked', async () => {
    const onClick = vi.fn()
    const { user } = render(<Toggle onClick={onClick} />)

    await user.click(screen.getByRole('checkbox'))

    expect(onClick).toHaveBeenCalled()
  })

  it('should have the correct class names based on props', () => {
    render(<Toggle className="custom-class" size="lg" />)

    const checkbox = screen.getByRole('checkbox')

    expect(checkbox.className).toContain('root')
    expect(checkbox.className).toContain('size-lg')
    expect(checkbox.className).toContain('custom-class')
  })
})
