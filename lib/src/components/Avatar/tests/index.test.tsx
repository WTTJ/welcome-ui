import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Avatar } from '../index'

describe('<Avatar>', () => {
  it('should render without image and 2 words', () => {
    render(<Avatar name="welcome jungle" />)

    expect(screen.getByText('WJ')).toBeInTheDocument()
  })

  it('should render without image and 1 word', () => {
    render(<Avatar name="welcomejungle" />)

    expect(screen.getByText('WE')).toBeInTheDocument()
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
})
