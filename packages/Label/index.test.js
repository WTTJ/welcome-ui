import React from 'react'

import { render } from '../Core/utils/tests'

import { Label } from './index'

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
      const { container } = render(<Label variant="error">{content}</Label>)

      expect(container).toHaveTextContent(content)
      expect(container).toHaveTextContent('!')
    })

    it('with custom warning icon', () => {
      const { container } = render(
        <Label errorWarningIcon={<span>errorWarningIcon</span>} variant="error">
          {content}
        </Label>
      )

      expect(container).toHaveTextContent(content)
      expect(container).toHaveTextContent('errorWarningIcon')
    })
  })

  describe('should render correctly when is disabled', () => {
    it('default', () => {
      const { container } = render(<Label disabled>{content}</Label>)
      const icon = container.querySelector('[title="SpecialPipeline"]')

      expect(icon).not.toBeNull()
    })

    it('with custom icon', () => {
      const { container } = render(
        <Label disabled disabledIcon={<span>disabledIcon</span>}>
          {content}
        </Label>
      )

      expect(container).toHaveTextContent('disabledIcon')
    })
  })
})
