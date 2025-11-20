import { screen } from '@testing-library/dom'

import { Tag } from '@/components/Tag'

import { expectAsSupport, render } from '@tests'

describe('Tag', () => {
  expectAsSupport(Tag)

  it('should render', () => {
    render(<Tag>Default</Tag>)
    expect(screen.getByText('Default')).toBeInTheDocument()
  })

  it('should render with variant', () => {
    render(
      <Tag data-testid="tag" variant="blue">
        Blue
      </Tag>
    )
    const tag = screen.getByTestId('tag')

    expect(tag.className).toMatch(/_variant-blue/)
  })

  it('should render with size', () => {
    render(
      <Tag data-testid="tag" size="md">
        Medium
      </Tag>
    )
    const tag = screen.getByTestId('tag')

    expect(tag.className).toMatch(/_size-md/)
  })

  it('should render with icon', () => {
    render(<Tag icon={<span>Icon</span>}>With Icon</Tag>)

    expect(screen.getByText('Icon')).toBeInTheDocument()
    expect(screen.getByText('With Icon')).toBeInTheDocument()
  })

  it('should render with remove action', async () => {
    const onRemove = vi.fn()

    const { user } = render(<Tag onRemove={onRemove}>Removable</Tag>)

    const removeButton = screen.getByRole('button', { name: /remove tag/i })
    expect(removeButton).toBeInTheDocument()

    await user.click(removeButton)
    expect(onRemove).toHaveBeenCalledTimes(1)
  })

  it('should call onClick', async () => {
    const onClick = vi.fn()

    const { user } = render(
      <Tag data-testid="tag" onClick={onClick}>
        Test
      </Tag>
    )

    const eventElement = screen.getByText('Test')
    await user.click(eventElement)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('should apply isSquare when single character and no remove', () => {
    render(<Tag data-testid="tag">A</Tag>)
    const tag = screen.getByTestId('tag')
    expect(tag.className).toMatch(/isSquare/)
  })

  it('should merge external className', () => {
    render(
      <Tag className="custom-class" data-testid="tag">
        Test
      </Tag>
    )
    expect(screen.getByTestId('tag').className).toMatch(/custom-class/)
  })

  it('should apply disabled class when disabled prop is true', () => {
    render(
      <Tag data-testid="tag" disabled>
        Disabled Tag
      </Tag>
    )
    const tag = screen.getByTestId('tag')
    expect(tag.className).toMatch(/disabled/)
  })

  it('should not call onClick when disabled', async () => {
    const onClick = vi.fn()

    const { user } = render(
      <Tag data-testid="tag" disabled onClick={onClick}>
        Disabled Tag
      </Tag>
    )

    const tag = screen.getByTestId('tag')
    await user.click(tag)
    expect(onClick).not.toHaveBeenCalled()
  })

  it('should render with ai prop', () => {
    render(
      <Tag ai data-testid="tag">
        AI Tag
      </Tag>
    )
    const tag = screen.getByTestId('tag')
    expect(tag.className).toMatch(/ai/)
  })
})
