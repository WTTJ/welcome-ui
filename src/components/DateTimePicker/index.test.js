import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../utils/tests'
import { DatePicker } from '../DatePicker'
import { TimePicker } from '../TimePicker'

import { DateTimePicker } from './index'

test('<DateTimePicker> renders correctly', () => {
  const { getByTestId } = render(
    <DateTimePicker dataTestId="dateTimePicker" value={Date.now()}>
      <DatePicker />
      <TimePicker />
    </DateTimePicker>
  )
  const dateTimePicker = getByTestId('dateTimePicker')
  expect(dateTimePicker.children).toHaveLength(2)
})

test('can render and opens the datePicker on click', () => {
  const { baseElement, getByTestId } = render(
    <DateTimePicker value={Date.now()}>
      <DatePicker dataTestId={{ datePicker: 'datePicker' }} />
      <TimePicker />
    </DateTimePicker>
  )
  const datePicker = getByTestId('datePicker')
  fireEvent.click(datePicker)

  const datePickerPopper = baseElement.querySelectorAll('.date-picker-popper')
  const timePickerPopper = baseElement.querySelectorAll('.time-picker-popper')
  expect(datePickerPopper).toHaveLength(1)
  expect(timePickerPopper).toHaveLength(0)
})

test('can render and opens the timePicker on click', () => {
  const { baseElement, getByTestId } = render(
    <DateTimePicker value={Date.now()}>
      <DatePicker />
      <TimePicker dataTestId="timePicker" />
    </DateTimePicker>
  )
  const timePicker = getByTestId('timePicker')
  fireEvent.click(timePicker)

  const datePickerPopper = baseElement.querySelectorAll('.date-picker-popper')
  const timePickerPopper = baseElement.querySelectorAll('.time-picker-popper')
  expect(datePickerPopper).toHaveLength(0)
  expect(timePickerPopper).toHaveLength(1)
})

test('', () => {
  const { baseElement, debug, getByTestId } = render(
    <DateTimePicker value={new Date('09/11/2001')}>
      <DatePicker
        dataTestId={{
          datePicker: 'datePicker',
          decreaseMonth: 'decreaseMonth',
          increaseMonth: 'increaseMonth',
          monthSelect: 'monthSelect',
          yearSelect: 'yearSelect'
        }}
      />
      <TimePicker />
    </DateTimePicker>
  )
  const datePicker = getByTestId('datePicker')
  expect(datePicker).toHaveValue('11/09/2001')

  fireEvent.click(datePicker)

  // const decreaseMonth = getByTestId('decreaseMonth')
  // const increaseMonth = getByTestId('increaseMonth')
  // const monthSelect = getByTestId('monthSelect')
  // const yearSelect = getByTestId('yearSelect')
  const datePickerPopper = baseElement.querySelector('.date-picker-popper')
  const timePickerPopper = baseElement.querySelector('.time-picker-popper')

  debug()
  // expect(monthSelect).toHaveTextContent('September')
  expect(datePickerPopper).toBeInTheDocument()
  expect(timePickerPopper).toBeNull()
})
