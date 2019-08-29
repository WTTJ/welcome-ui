import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../utils/tests'
import { DatePicker } from '../DatePicker'
import { TimePicker } from '../TimePicker'

import { DateTimePicker } from './index'

test('<DateTimePicker> renders correctly', () => {
  const { getByTestId } = render(
    <DateTimePicker value={Date.now()}>
      <DatePicker />
      <TimePicker />
    </DateTimePicker>
  )
  const dateTimePicker = getByTestId('dateTimePicker')
  expect(dateTimePicker.children).toHaveLength(2)
})

test('can render and opens the datePicker on click', () => {
  const { baseElement, container } = render(
    <DateTimePicker value={Date.now()}>
      <DatePicker />
      <TimePicker />
    </DateTimePicker>
  )
  const datePicker = container.getElementsByClassName('date-picker')[0]
  const datePickerPopper = baseElement.getElementsByClassName('date-picker-popper')
  const timePickerPopper = baseElement.getElementsByClassName('time-picker-popper')

  fireEvent.click(datePicker)

  expect(datePickerPopper).toHaveLength(1)
  expect(timePickerPopper).toHaveLength(0)
})

test('can render and opens the timePicker on click', () => {
  const { baseElement, container } = render(
    <DateTimePicker value={Date.now()}>
      <DatePicker />
      <TimePicker />
    </DateTimePicker>
  )
  const timePicker = container.getElementsByClassName('time-picker')[0]
  const datePickerPopper = baseElement.getElementsByClassName('date-picker-popper')
  const timePickerPopper = baseElement.getElementsByClassName('time-picker-popper')

  fireEvent.click(timePicker)

  expect(datePickerPopper).toHaveLength(0)
  expect(timePickerPopper).toHaveLength(1)
})
