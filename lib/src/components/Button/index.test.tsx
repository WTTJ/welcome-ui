import { screen } from '@testing-library/react'

import { expectAsSupport, render } from '@tests'

import { Button } from '.'

describe('Button', () => {
  expectAsSupport(Button)

  it('should render correctly', () => {
    render(<Button>Button</Button>)

    expect(screen.getByText('Button')).toBeInTheDocument()
  })
})
