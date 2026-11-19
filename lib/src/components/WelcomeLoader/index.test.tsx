import { screen } from '@testing-library/react'

import { render } from '@tests'

import { WelcomeLoader } from './index'

// lottie needs a real canvas, which jsdom does not provide
vi.mock('lottie-light-react', () => ({ useLottie: () => ({ View: <svg /> }) }))

describe('<WelcomeLoader>', () => {
  it('should be announced as a loading status', () => {
    render(<WelcomeLoader />)

    expect(screen.getByRole('status', { name: 'Loading' })).toBeInTheDocument()
  })

  it('should accept a custom label', () => {
    render(<WelcomeLoader aria-label="Chargement" />)

    expect(screen.getByRole('status', { name: 'Chargement' })).toBeInTheDocument()
  })
})
