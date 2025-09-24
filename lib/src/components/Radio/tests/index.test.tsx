import { RadioProvider } from '@ariakit/react'
import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Radio } from '../'

const content = 'Jungle'

describe('<Radio />', () => {
  it('should render correctly', () => {
    render(
      <RadioProvider>
        <Radio dataTestId="radio" label={content} />
      </RadioProvider>
    )

    const radio = screen.getByTestId('radio')
    const label = screen.getByTestId('radio-label')

    expect(radio).toHaveAttribute('aria-label', content)
    expect(radio).toHaveAttribute('type', 'radio')
    expect(label).toHaveTextContent(content)
  })

  it('should render correctly with an hint', () => {
    render(<Radio dataTestId="radio" hint="hint" label={content} />)

    const hint = screen.getByTestId('radio-hint')

    expect(hint).toHaveTextContent('hint')
  })
})
