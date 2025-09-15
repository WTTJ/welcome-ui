import { Badge } from '../'
import { render } from '../../../../tests'
import { createTheme } from '../../../oldTheme'

const content = '1'

const theme = createTheme()

describe('<Badge>', () => {
  it('should render correctly', () => {
    const { container } = render(<Badge>{content}</Badge>)

    expect(container).toHaveTextContent(content)
  })

  it('should have correct size', () => {
    const { getByTestId } = render(
      <Badge dataTestId="badge" size="sm">
        {content}
      </Badge>
    )
    const badge = getByTestId('badge')

    expect(badge).toHaveStyle({ padding: theme.badges.sizes.sm.padding })
  })

  it('should have correct primary variant color', () => {
    const { getByTestId } = render(
      <Badge dataTestId="badge" variant="primary">
        {content}
      </Badge>
    )
    const badge = getByTestId('badge')

    expect(badge).toHaveStyle({ 'background-color': theme.colors['primary-40'] })
    expect(badge).toHaveStyle({ color: '#000000' })
  })

  it('should have correct primary variant color if disabled', () => {
    const { getByTestId } = render(
      <Badge dataTestId="badge" disabled variant="primary">
        {content}
      </Badge>
    )
    const badge = getByTestId('badge')

    expect(badge).toHaveStyle({ 'background-color': theme.colors['primary-50'] })
    expect(badge).toHaveStyle({ color: theme.colors['primary-80'] })
  })
})
