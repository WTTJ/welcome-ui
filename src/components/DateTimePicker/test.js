import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { render } from '../../utils/tests'

import { DateTimePicker } from './index'

test('<DateTimePicker> renders correctly', () => {
  const dateTimePicker = render(<DateTimePicker date={Date.now()} />).toJSON()
  expect(dateTimePicker.children.length).toEqual(2)
})

test('<DateTimePicker> renders only DatePicker when prop datePickerOnly is true', () => {
  const dateTimePicker = render(<DateTimePicker date={Date.now()} datePickerOnly />).toJSON()
  expect(dateTimePicker.children.length).toEqual(1)
})

test('<DateTimePicker> renders only TimePicker when prop timePickerOnly is true', () => {
  const dateTimePicker = render(<DateTimePicker date={Date.now()} timePickerOnly />).toJSON()
  expect(dateTimePicker.children.length).toEqual(1)
})

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('can render and opens the datePicker on click', () => {
  act(() => {
    ReactDOM.render(<DateTimePicker date={Date.now()} />, container)
  })
  const datePicker = container.querySelectorAll('input')[0]

  act(() => {
    datePicker.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(container.getElementsByClassName('react-datepicker-popper').length).toEqual(1)
})

it('should render next time interval if current time is between 2 intervals', () => {
  //Give the date of today at 12h25
  const date = new Date().setHours(12, 25, 0, 0)

  act(() => {
    ReactDOM.render(<DateTimePicker date={new Date(date)} />, container)
  })

  const timePicker = container.querySelectorAll('input')[1]

  // with the default timeInterval of 15 minutes, next Interval should be 12h30
  expect(timePicker.value).toEqual('12:30')
})

it('should not render next interval if current time is a multiple of the interval', () => {
  //Give the date of today at 12h30
  const date = new Date().setHours(12, 30, 0, 0)

  act(() => {
    ReactDOM.render(<DateTimePicker date={new Date(date)} />, container)
  })

  const timePicker = container.querySelectorAll('input')[1]

  // with a date that matches an interval multiple ( 12h30 ), it should stay 12h30
  expect(timePicker.value).toEqual('12:30')
})

it('should render next plain hour if timeInterval is 60', () => {
  //Give the date of today at 12h05
  const date = new Date().setHours(12, 5, 0, 0)

  act(() => {
    ReactDOM.render(
      <DateTimePicker date={new Date(date)} timePickerProps={{ timeIntervals: 60 }} />,
      container
    )
  })

  const timePicker = container.querySelectorAll('input')[1]

  // with a timeInterval of 60, it should render the next hour
  expect(timePicker.value).toEqual('13:00')
})
