import { AlertIcon } from '@/components/Icon'
import { Link } from '@/components/Link'

import { expectAsSupport, render } from '@tests'

const content = 'Jungle'

describe('<Link>', () => {
  expectAsSupport(Link)

  it('should render correctly', () => {
    const { getByTestId } = render(<Link data-testid="link">{content}</Link>)
    const link = getByTestId('link')

    expect(link).toHaveTextContent(content)
    expect(link).toHaveStyle({ color: 'inherit' })
  })

  it('should render correctly with a target blank', () => {
    const { getByTestId } = render(
      <Link data-testid="link" target="_blank">
        {content}
      </Link>
    )
    const button = getByTestId('link')

    expect(button).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should wrap text node with underline', () => {
    const { getByTestId } = render(<Link data-testid="link">{content}</Link>)
    const link = getByTestId('link')
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('span')
    expect(child).toHaveClass(/wui-text/)
  })

  it('should wrap <span /> with underline', () => {
    const { getByTestId } = render(
      <Link data-testid="link">
        <span>{content}</span>
      </Link>
    )
    const link = getByTestId('link')

    expect(link).toHaveTextContent(content)
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('span')
    expect(child).toHaveClass(/wui-text/)
  })

  it('should wrap <div data-wui-link /> with underline', () => {
    const { getByTestId } = render(
      <Link data-testid="link">
        <div data-wui-link>{content}</div>
      </Link>
    )
    const link = getByTestId('link')
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('div')
    expect(child).toHaveClass(/wui-text/)
  })

  it('should wrap <div /> with underline', () => {
    const { getByTestId } = render(
      <Link data-testid="link">
        <div>{content}</div>
      </Link>
    )
    const link = getByTestId('link')
    const child = link.firstChild as HTMLElement
    expect(child.tagName.toLowerCase()).toBe('div')
    expect(child).toHaveClass(/wui-text/)
  })

  it('should only wrap text children with underline', () => {
    const { getByTestId } = render(
      <Link data-testid="link">
        <span>{content}</span>
        <div>
          <AlertIcon />
        </div>
      </Link>
    )
    const link = getByTestId('link')
    expect(link).toHaveTextContent(content)

    const span = link.firstChild as HTMLElement
    expect(span.tagName.toLowerCase()).toBe('span')
    expect(span).toHaveClass(/wui-text/)

    const div = link.lastChild as HTMLElement
    expect(div.tagName.toLowerCase()).toBe('div')
    expect(div).not.toHaveClass(/wui-text/)
  })

  it('should add <ExternalIcon />', () => {
    const { getByTestId } = render(
      <Link data-testid="link" isExternal>
        {content}
      </Link>
    )
    const link = getByTestId('link')
    expect(link).toHaveTextContent(content)

    const span = link.firstChild as HTMLElement
    expect(span.tagName.toLowerCase()).toBe('span')
    expect(span).toHaveClass(/wui-text/)

    const svg = span.lastChild as HTMLElement
    expect(svg.tagName.toLowerCase()).toBe('svg')
  })
})
