import { Grid } from '../'
import { render } from '../../../../../tests'

const content = 'Jungle'

describe('<Flex>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Grid dataTestId="grid">{content}</Grid>)
    const element = getByTestId('grid')

    expect(element).toHaveTextContent(content)
    expect(element).toHaveStyle({ display: 'grid' })
  })
})
