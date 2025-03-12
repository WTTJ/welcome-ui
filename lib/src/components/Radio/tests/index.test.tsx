import React from 'react'
import { screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import { render } from '../../../../tests'
import { Radio } from '../'

const content = 'Jungle'

describe('<Radio />', () => {
  it('should render correctly', () => {
    render(<Radio dataTestId="radio" label={content} />)

    const radio = screen.getByTestId('radio')
    const label = screen.getByTestId('radio-label')

    expect(radio).toHaveAttribute('label', content)
    expect(radio).toHaveAttribute('type', 'radio')
    expect(label).toHaveTextContent(content)
  })

  it('should render correctly with an hint', () => {
    render(<Radio dataTestId="radio" hint="hint" label={content} />)

    const hint = screen.getByTestId('radio-hint')

    expect(hint).toHaveTextContent('hint')
  })
})
