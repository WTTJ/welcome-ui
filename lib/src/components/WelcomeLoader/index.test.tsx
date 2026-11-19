import { render } from '@tests'

import { WelcomeLoader } from './index'

const useLottie = vi.fn<(options: { loop: boolean }) => { View: JSX.Element }>(() => ({
  View: <svg />,
}))

// lottie needs a real canvas, which jsdom does not provide
vi.mock('lottie-light-react', () => ({
  useLottie: (options: { loop: boolean }) => useLottie(options),
}))

const mockReducedMotion = (matches: boolean) => {
  window.matchMedia = vi.fn().mockReturnValue({ matches })
}

describe('<WelcomeLoader>', () => {
  afterEach(() => {
    useLottie.mockClear()
  })

  it('should loop by default', () => {
    mockReducedMotion(false)
    render(<WelcomeLoader />)

    expect(useLottie).toHaveBeenCalledWith(expect.objectContaining({ loop: true }))
  })

  it('should play once when reduced motion is requested', () => {
    mockReducedMotion(true)
    render(<WelcomeLoader />)

    expect(useLottie).toHaveBeenCalledWith(expect.objectContaining({ loop: false }))
  })
})
