import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { render, renderHook } from '../../../utils/tests'
import { Accordion, useAccordion } from '../src'

const content = 'content'
const title = 'title'

describe('<Accordion />', () => {
  it('should have correct attribute on click on element', () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordion())

    render(
      <Accordion dataTestId="accordion" store={store} title={title}>
        {content}
      </Accordion>
    )

    const button = screen.getByTestId('accordion-title')
    const children = screen.getByTestId('accordion-content')

    expect(button).toHaveTextContent(title)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(children).toHaveTextContent(content)
    expect(children).toHaveAttribute('hidden')

    fireEvent.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(children).not.toHaveAttribute('hidden')
  })

  it('should have correct attribute on open at start', () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordion({ defaultOpen: true }))

    render(
      <Accordion dataTestId="accordion" store={store} title={title}>
        {content}
      </Accordion>
    )

    const button = screen.getByTestId('accordion-title')
    const children = screen.getByTestId('accordion-content')

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(children).not.toHaveAttribute('hidden')
  })
})
