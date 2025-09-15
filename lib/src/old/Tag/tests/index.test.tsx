import { Tag } from '../'
import { render } from '../../../../tests'
import { createTheme } from '../../../oldTheme'

const content = 'Jungle'

const theme = createTheme()

const heightTagMd = theme.tags.sizes.md.height

describe('<Tag>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Tag dataTestId="tag">{content}</Tag>)
    const tag = getByTestId('tag')

    expect(tag).toHaveTextContent(content)
    expect(tag).toHaveStyle({ 'background-color': theme.colors['beige-20'] })
    expect(tag).toHaveStyle({ color: theme.colors['beige-90'] })
    expect(tag).toHaveStyle({ padding: theme.tags.sizes.md.padding })
  })

  it('should have correct size', () => {
    const { getByTestId } = render(
      <Tag dataTestId="tag" size="md">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyle({ padding: theme.tags.sizes.md.padding })
  })

  it('should have correct color for success variant', () => {
    const { getByTestId } = render(
      <Tag dataTestId="tag" variant="success">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyle({ 'background-color': theme.colors['green-10'] })
  })

  it('should have correct color for sub variant', () => {
    const { getByTestId } = render(
      <Tag dataTestId="tag" variant="teal">
        {content}
      </Tag>
    )
    const tag = getByTestId('tag')

    expect(tag).toHaveStyle({ 'background-color': theme.colors['secondary-teal'] })
  })

  describe('should have correct size with only one character', () => {
    it('with string', () => {
      const { getByTestId } = render(<Tag dataTestId="tag">1</Tag>)
      const tag = getByTestId('tag')

      expect(tag).toHaveStyle({ width: heightTagMd })
      expect(tag).toHaveStyle({ height: heightTagMd })
      expect(tag).toHaveStyle({ padding: '0' })
    })

    it('with integer', () => {
      const { getByTestId } = render(<Tag dataTestId="tag">{1}</Tag>)
      const tag = getByTestId('tag')

      expect(tag).toHaveStyle({ width: heightTagMd })
      expect(tag).toHaveStyle({ height: heightTagMd })
      expect(tag).toHaveStyle({ padding: '0' })
    })

    it('with zero', () => {
      const { getByTestId } = render(<Tag dataTestId="tag">{0}</Tag>)
      const tag = getByTestId('tag')

      expect(tag).toHaveStyle({ width: heightTagMd })
      expect(tag).toHaveStyle({ height: heightTagMd })
      expect(tag).toHaveStyle({ padding: '0' })
    })
  })
})
