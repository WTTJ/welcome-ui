import React from 'react'
import { describe, expect, it } from 'vitest'

import { Picker } from '../'
import { render } from '../../../../tests'

const PickerOptionElement: React.FC<{ selected: boolean; value: string }> = ({
  selected,
  value,
}) => <div data-selected={selected}>{value}</div>

describe('<Picker>', () => {
  it('should render', () => {
    const { container } = render(
      <Picker
        dataTestId="picker"
        name="value"
        options={[
          {
            element: props => <PickerOptionElement {...props} value="foo" />,
            value: 'foo',
          },
          {
            element: props => <PickerOptionElement {...props} value="bar" />,
            value: 'bar',
          },
          {
            element: props => <PickerOptionElement {...props} value="baz" />,
            value: 'baz',
          },
        ]}
        required
        value="bar"
      />
    )

    const selectedItem = container.querySelector('div[data-selected="true"]')

    expect(selectedItem?.textContent).toBe('bar')
  })
})
