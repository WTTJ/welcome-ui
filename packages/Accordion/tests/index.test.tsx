import React from 'react'

import { render, renderHook } from '../../../utils/tests'
import { Accordion, useAccordionStore } from '../src'

const content = 'content'
const title = 'title'

describe('<Accordion>', () => {
  it('should render correctly', () => {
    const {
      result: { current: store },
    } = renderHook(() => useAccordionStore())

    const { container } = render(
      <Accordion store={store} title={title}>
        {content}
      </Accordion>
    )

    expect(container).toHaveTextContent(content)
    expect(container).toHaveTextContent(title)
  })
})
