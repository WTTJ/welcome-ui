import { Toggle } from '../'
import { render } from '../../../../../tests'

describe('<Toggle>', () => {
  it('should render correctly', () => {
    const { container } = render(<Toggle />)

    expect(container.querySelector('input')).toBeInTheDocument()
  })
})
