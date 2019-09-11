import React from 'react'

import { fireEvent, render } from '../../utils/tests'

import { Growl } from './index'

const content = 'Jungle'

describe('<Growl>', () => {
  it('should render correctly', () => {
    const { container } = render(<Growl>{content}</Growl>)

    expect(container).toHaveTextContent(content)
  })

  describe('Growl closing', () => {
    it('should call onClose', () => {
      const onClose = jest.fn()
      const { getByTestId } = render(
        <Growl dataTestId="growl-close" onClose={onClose}>
          {content}
        </Growl>
      )
      const close = getByTestId('growl-close')
      const closeIcon = close.querySelector('[title="cross"]')

      fireEvent.click(close)

      expect(closeIcon).toBeInTheDocument()
      expect(onClose).toHaveBeenCalled()
    })

    it('should render correctly with custom close', () => {
      const onClose = jest.fn()
      const { getByTestId } = render(
        <Growl close={<span>growl close</span>} dataTestId="growl-close" onClose={onClose}>
          {content}
        </Growl>
      )
      const close = getByTestId('growl-close')

      expect(close).toHaveTextContent('growl close')
    })
  })
})
