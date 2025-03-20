import { Logo, SolutionsSymbol, Symbol } from '..'
import { render } from '../../../../tests'

describe('<Loader>', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo />)

    expect(container.querySelector('title')).toHaveTextContent('Welcome to the jungle logo')
  })

  it('should render correctly other logo', () => {
    const { container } = render(<SolutionsSymbol />)

    expect(container.querySelector('title')).toHaveTextContent(
      'Welcome to the jungle solutions symbol'
    )
  })

  it('should render correctly other symbol', () => {
    const { container } = render(<Symbol />)

    expect(container.querySelector('title')).toHaveTextContent('Welcome to the jungle symbol')
  })
})
