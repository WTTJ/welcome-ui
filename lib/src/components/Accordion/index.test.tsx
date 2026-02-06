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
        <Accordion.Disclosure data-testid="accordion-disclosure">{title}</Accordion.Disclosure>
        <Accordion.Content data-testid="accordion-content">{content}</Accordion.Content>
      </Accordion>
    )

    const accordionDisclosure = screen.getByTestId('accordion-disclosure')
    const accordionTrigger = screen.getByTestId('accordion-disclosure-button')
    const accordionContent = screen.getByTestId('accordion-content')

    expect(accordionDisclosure).toHaveTextContent(title)
    expect(accordionTrigger).toHaveAttribute('aria-expanded', 'false')
    expect(accordionContent).toHaveTextContent(content)
    expect(accordionContent).toHaveAttribute('hidden')

    await user.click(accordionTrigger)

    expect(accordionTrigger).toHaveAttribute('aria-expanded', 'true')
    expect(accordionContent).not.toHaveAttribute('hidden')
  })

  it('should have correct attribute on open at start', () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordion({ defaultOpen: true }))

    render(
      <Accordion data-testid="accordion" store={store}>
        <Accordion.Disclosure data-testid="accordion-disclosure">{title}</Accordion.Disclosure>
        <Accordion.Content data-testid="accordion-content">{content}</Accordion.Content>
      </Accordion>
    )

    const accordionTrigger = screen.getByTestId('accordion-disclosure-button')
    const accordionContent = screen.getByTestId('accordion-content')

    expect(accordionTrigger).toHaveAttribute('aria-expanded', 'true')
    expect(accordionContent).not.toHaveAttribute('hidden')
  })
})
