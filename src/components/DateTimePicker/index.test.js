import React from 'react'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
      <DatePicker dataTestId="datePicker" />
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

test('<DateTimePicker> renders month select', () => {
  const { getAllByRole, getByTestId } = render(
    <DateTimePicker value={new Date('09/11/2001')}>
      <DatePicker dataTestId="datePicker" />
      <TimePicker />
    </DateTimePicker>
  )
  const datePicker = getByTestId('datePicker')
  expect(datePicker).toHaveValue('11/09/2001')

  fireEvent.click(datePicker)

  const [monthSelect, yearSelect] = getAllByRole('combobox')

  expect(monthSelect).toHaveTextContent('September')
  expect(yearSelect).toHaveTextContent('2001')
})

test('<DateTimePicker> can proceed through next/prev months', () => {
  const { getAllByRole, getByTestId, getByTitle } = render(
    <DateTimePicker value={new Date('09/11/2001')}>
      <DatePicker dataTestId="datePicker" />
      <TimePicker />
    </DateTimePicker>
  )
  const datePicker = getByTestId('datePicker')
  fireEvent.click(datePicker)

  const decreaseMonth = getByTitle('Previous month')
  const increaseMonth = getByTitle('Next month')
  const [monthSelect, yearSelect] = getAllByRole('combobox')

  expect(monthSelect).toHaveTextContent('September')
  expect(yearSelect).toHaveTextContent('2001')

  fireEvent.click(decreaseMonth)
  expect(monthSelect).toHaveTextContent('August')
  expect(yearSelect).toHaveTextContent('2001')

  fireEvent.click(increaseMonth)
  fireEvent.click(increaseMonth)
  expect(monthSelect).toHaveTextContent('October')
  expect(yearSelect).toHaveTextContent('2001')

  fireEvent.click(increaseMonth)
  fireEvent.click(increaseMonth)
  fireEvent.click(increaseMonth)
  expect(monthSelect).toHaveTextContent('January')
  expect(yearSelect).toHaveTextContent('2002')

  fireEvent.click(decreaseMonth)
  expect(monthSelect).toHaveTextContent('December')
  expect(yearSelect).toHaveTextContent('2001')
})

test('<DateTimePicker> updating text updates selects', () => {
  const { getAllByRole, getByTestId } = render(
    <DateTimePicker value={new Date('09/11/2001')}>
      <DatePicker dataTestId="datePicker" />
      <TimePicker />
    </DateTimePicker>
  )
  const datePicker = getByTestId('datePicker')
  userEvent.type(datePicker, '20/06/2018')

  fireEvent.click(datePicker)

  const [monthSelect, yearSelect] = getAllByRole('combobox')

  expect(monthSelect).toHaveTextContent('June')
  expect(yearSelect).toHaveTextContent('2018')
})

test('<DatePicker> can be cleared', () => {
  const { getByRole, getByTestId } = render(
    <DatePicker dataTestId="datePicker" value={new Date('09/11/2001')} />
  )

  const datePicker = getByTestId('datePicker')
  const clearButton = getByRole('button')

  fireEvent.click(clearButton)
  expect(datePicker).toHaveValue('')
})
