import { screen } from '@testing-library/react'

import { Label } from '../'
import { render } from '../../../../tests'

const content = 'Jungle'

describe('<Label>', () => {
  it('should render correctly', () => {
    const { container } = render(<Label>{content}</Label>)

    expect(container).toHaveTextContent(content)
  })

  it('should render correctly when is required', () => {
    const { container } = render(<Label required>{content}</Label>)

    expect(container).toHaveTextContent(content)
    // TODO: Check for content of `after`
  })

  describe('should render correctly when had a variant', () => {
    it('default', () => {
      const { container } = render(<Label variant="danger">{content}</Label>)

      expect(container).toHaveTextContent(content)
    })

    it('with custom warning icon', () => {
      const { container } = render(
        <Label icon={<span>custom icon</span>} variant="danger">
          {content}
        </Label>
      )

      expect(container).toHaveTextContent(content)
      expect(container).toHaveTextContent('custom icon')
    })
  })

  it('should render correctly when is disabled', () => {
    render(<Label disabled>{content}</Label>)

    const icon = screen.getByRole('img')

    expect(icon).toHaveAttribute('alt', 'Lock')
  })

  it('should render correctly when is disabled with custom icon', () => {
    const { container } = render(
      <Label disabled disabledIcon={<span>disabledIcon</span>}>
        {content}
      </Label>
    )

    expect(container).toHaveTextContent('disabledIcon')
  })
})
