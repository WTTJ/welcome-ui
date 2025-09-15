import { Link } from '../'
import { render } from '../../../../../tests'

const content = 'Jungle'

describe('<Link>', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<Link dataTestId="link">{content}</Link>)
    const link = getByTestId('link')

    expect(link).toHaveTextContent(content)
    expect(link).toHaveStyle({ color: 'inherit' })
  })

  it('should render correctly with a target blank', () => {
    const { getByTestId } = render(
      <Link dataTestId="link" target="_blank">
        {content}
      </Link>
    )
    const button = getByTestId('link')

    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should wrap text node with underline', () => {
    const { getByTestId } = render(<Link dataTestId="link">{content}</Link>)
    const link = getByTestId('link')
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('span')
    expect(child).toHaveClass('wui-text')
  })

  it('should wrap <span /> with underline', () => {
    const { getByTestId } = render(
      <Link dataTestId="link">
        <span>{content}</span>
      </Link>
    )
    const link = getByTestId('link')

    expect(link).toHaveTextContent(content)
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('span')
    expect(child).toHaveClass('wui-text')
  })

  it('should wrap <div data-wui-link /> with underline', () => {
    const { getByTestId } = render(
      <Link dataTestId="link">
        <div data-wui-link>{content}</div>
      </Link>
    )
    const link = getByTestId('link')
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('span')
    expect(child).toHaveClass('wui-text')
  })

  it('should not wrap <div /> with underline', () => {
    const { getByTestId } = render(
      <Link dataTestId="link">
        <div>{content}</div>
      </Link>
    )
    const link = getByTestId('link')
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('div')
    expect(child).not.toHaveClass('wui-text')
  })

  it('should only wrap text children with underline', () => {
    const { getByTestId } = render(
      <Link dataTestId="link">
        <span>{content}</span>
        <div>{content}</div>
      </Link>
    )
    const link = getByTestId('link')
    expect(link).toHaveTextContent(content)

    const span = link.firstChild as HTMLElement
    expect(span.tagName.toLowerCase()).toBe('span')
    expect(span).toHaveClass('wui-text')

    const div = link.lastChild as HTMLElement
    expect(div.tagName.toLowerCase()).toBe('div')
    expect(div).not.toHaveClass('wui-text')
  })

  it('should add <ExternalIcon />', () => {
    const { getByTestId } = render(
      <Link dataTestId="link" isExternal>
        {content}
      </Link>
    )
    const link = getByTestId('link')
    expect(link).toHaveTextContent(content)

    const span = link.firstChild as HTMLElement
    expect(span.tagName.toLowerCase()).toBe('span')
    expect(span).toHaveClass('wui-text')

    const svg = span.lastChild as HTMLElement
    expect(svg.tagName.toLowerCase()).toBe('svg')
  })
})
