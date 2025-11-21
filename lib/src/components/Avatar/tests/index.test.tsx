import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Avatar } from '../index'

describe('<Avatar>', () => {
  it('should render without image and 2 words', () => {
    render(<Avatar name="welcome jungle" />)

    expect(screen.getByText('WJ')).toBeInTheDocument()
  })

  it('should render with an image', () => {
    render(
      <Avatar
        name="welcome jungle"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
    )

    expect(screen.getByAltText('welcome jungle')).toBeInTheDocument()
    expect(screen.queryByText('WJ')).toBeNull()
  })

  it('should render without name and image', () => {
    render(<Avatar />)

    const svg = screen.getByRole('img', { hidden: true })
    const use = screen.getByRole('img', { hidden: true }).querySelector('use')

    expect(svg).toBeInTheDocument()
    expect(use).toHaveAttribute('href', '#user')
  })
})
