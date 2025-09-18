import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Button } from '.'

describe('Button', () => {
  it('should render correctly', () => {
    render(<Button>Button</Button>)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
