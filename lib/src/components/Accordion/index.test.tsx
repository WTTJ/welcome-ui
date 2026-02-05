import { renderHook, screen } from '@testing-library/react'

import { render } from '@tests'

import { Accordion, useAccordion } from './index'

const content = 'content'
const title = 'title'

describe('<Accordion />', () => {
  it('should have correct attribute on click on element', async () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordion())

    const { user } = render(
      <Accordion store={store}>
        <Accordion.Heading data-testid="accordion-title">{title}</Accordion.Heading>
        <Accordion.Content data-testid="accordion-content">{content}</Accordion.Content>
      </Accordion>
    )

    const button = screen.getByTestId('accordion-title')
    const children = screen.getByTestId('accordion-content')

    expect(button).toHaveTextContent(title)
    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(children).toHaveTextContent(content)
    expect(children).toHaveAttribute('hidden')

    await user.click(button)

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(children).not.toHaveAttribute('hidden')
  })

  it('should have correct attribute on open at start', () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordion({ defaultOpen: true }))

    render(
      <Accordion data-testid="accordion" store={store}>
        <Accordion.Heading data-testid="accordion-title">{title}</Accordion.Heading>

        <Accordion.Content data-testid="accordion-content">{content}</Accordion.Content>
      </Accordion>
    )

    const button = screen.getByTestId('accordion-title')
    const children = screen.getByTestId('accordion-content')

    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(children).not.toHaveAttribute('hidden')
  })
})
