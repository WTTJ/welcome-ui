import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Toast } from './'

const content = 'Jungle'

describe('<Title>', () => {
  it('should render correctly', () => {
    render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = screen.getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyle({ color: '#000000' })
  })

  it('should render correctly with a state', () => {
    render(<Toast.Title data-testid="growl-title">{content}</Toast.Title>)
    const title = screen.getByTestId('growl-title')

    expect(title).toHaveTextContent(content)
    expect(title).toHaveStyle({ color: '#000000' })
  })
})
