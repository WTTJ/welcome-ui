import { screen } from '@testing-library/dom'

import { Tag } from '@/components/Tag'

import { expectAsSupport, render } from '../../../tests'

describe('Tag', () => {
  expectAsSupport(Tag)

  it('should render', () => {
    render(<Tag>Default</Tag>)
    expect(screen.getByText('Default')).toBeInTheDocument()
  })

  it('should render with variant', () => {
    render(
      <Tag data-testid="tag" variant="primary">
        Primary
      </Tag>
    )
    const tag = screen.getByTestId('tag')

    expect(tag.className).toMatch(/_variant-primary/)
  })

  it('should render with size', () => {
    render(
      <Tag data-testid="tag" size="xs">
        XSmall
      </Tag>
    )
    const tag = screen.getByTestId('tag')

    expect(tag.className).toMatch(/_size-xs/)
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
})
