import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../utils/tests'

import { DateTimePicker } from './index'

test('<DateTimePicker> renders correctly', () => {
  const { getByTestId } = render(<DateTimePicker value={Date.now()} />)
  const dateTimePicker = getByTestId('dateTimePicker')
  expect(dateTimePicker.children).toHaveLength(2)
})

test('<DateTimePicker> renders only DatePicker when prop datePickerOnly is true', () => {
  const { getByTestId } = render(<DateTimePicker datePickerOnly value={Date.now()} />)
  const dateTimePicker = getByTestId('dateTimePicker')
  expect(dateTimePicker.children).toHaveLength(1)
})

test('<DateTimePicker> renders only TimePicker when prop timePickerOnly is true', () => {
  const { getByTestId } = render(<DateTimePicker timePickerOnly value={Date.now()} />)
  const dateTimePicker = getByTestId('dateTimePicker')
  expect(dateTimePicker.children).toHaveLength(1)
})

test('can render and opens the datePicker on click', () => {
  const { baseElement, container } = render(<DateTimePicker value={Date.now()} />)
  const datePicker = container.getElementsByClassName('date-picker')[0]
  const datePickerPopper = baseElement.getElementsByClassName('date-picker-popper')
  const timePickerPopper = baseElement.getElementsByClassName('time-picker-popper')

  fireEvent.click(datePicker)

  expect(datePickerPopper).toHaveLength(1)
  expect(timePickerPopper).toHaveLength(0)
})

test('can render and opens the timePicker on click', () => {
  const { baseElement, container } = render(<DateTimePicker value={Date.now()} />)
  const timePicker = container.getElementsByClassName('time-picker')[0]
  const datePickerPopper = baseElement.getElementsByClassName('date-picker-popper')
  const timePickerPopper = baseElement.getElementsByClassName('time-picker-popper')

  fireEvent.click(timePicker)

  expect(datePickerPopper).toHaveLength(0)
  expect(timePickerPopper).toHaveLength(1)
})
