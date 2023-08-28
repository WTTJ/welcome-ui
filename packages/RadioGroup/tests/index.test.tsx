import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { RadioGroup } from '../src'
import { RadioTab } from '../../RadioTab'

const options = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
  { label: 'label3', value: 'value3' },
]

const name = 'radio-group'

describe('<RadioGroup />', () => {
  it('should render correctly', () => {
    const onChange = jest.fn()

    render(<RadioGroup dataTestId={name} name={name} onChange={onChange} options={options} />)

    const radio3 = screen.getByTestId('radio-group-value3')
    const label = screen.getByTestId('radio-group-value3-label')

    expect(radio3).toHaveAttribute('value', 'value3')
    expect(radio3).toHaveAttribute('id', 'radio-group.value3')
    expect(label).toHaveTextContent('label3')

    fireEvent.click(radio3)

    expect(radio3).toHaveAttribute('aria-checked', 'true')
    expect(onChange).toBeCalledWith('value3')
  })

  it('should render correctly with specific id', () => {
    const onChange = jest.fn()

    render(
      <RadioGroup
        dataTestId={name}
        id="dumb_id"
        name={name}
        onChange={onChange}
        options={options}
      />
    )

    const radio3 = screen.getByTestId('radio-group-value3')

    expect(radio3).toHaveAttribute('id', 'dumb_id.value3')
  })

  it('should render correctly with default value', () => {
    const onChange = jest.fn()

    render(
      <RadioGroup
        dataTestId={name}
        name={name}
        onChange={onChange}
        options={options}
        value={options[0].value}
      />
    )

    const radioSelected = screen.getByTestId('radio-group-value1')

    expect(radioSelected).toHaveAttribute('aria-checked', 'true')
  })

  it('should render correctly with hint', () => {
    const onChange = jest.fn()

    render(
      <RadioGroup
        dataTestId={name}
        name={name}
        onChange={onChange}
        options={[{ value: 'valueHint', label: 'labelHint', hint: 'hint' }, ...options]}
      />
    )

    const radio = screen.getByTestId('radio-group-valueHint')
    const label = screen.getByTestId('radio-group-valueHint-label')
    const hint = screen.getByTestId('radio-group-valueHint-hint')

    expect(radio).toHaveAttribute('value', 'valueHint')
    expect(label).toHaveTextContent('labelHint')
    expect(hint).toHaveTextContent('hint')
  })

  it('should render correctly with a renderOption component', () => {
    const onChange = jest.fn()

    render(
      <RadioGroup
        dataTestId={name}
        name={name}
        onChange={onChange}
        options={options}
        renderOption={RadioTab}
      />
    )

    const radio = screen.getByTestId('radio-group-value3')
    const input = screen.getByTestId('radio-group-value3-input')

    expect(input).toHaveAttribute('value', 'value3')
    expect(radio).toHaveTextContent('label3')

    fireEvent.click(radio)

    expect(input).toHaveAttribute('aria-checked', 'true')
    expect(onChange).toBeCalledWith('value3')
  })
})
