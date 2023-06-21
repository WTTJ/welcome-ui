import React from 'react'

import { fireEvent, render, renderHook, screen } from '../../../utils/tests'
import { Accordion, useAccordionStore } from '../src'

const content = 'content'
const title = 'title'

describe('<Accordion>', () => {
  it('should render correctly', () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordionStore())

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

  it('should render correctly on open at start', () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordionStore({ defaultOpen: true }))

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
