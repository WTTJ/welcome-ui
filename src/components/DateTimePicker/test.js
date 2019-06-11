import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'

import { render } from '../../utils/tests'

import { DateTimePicker } from './index'

test('<DateTimePicker> renders correctly', () => {
  const dateTimePicker = render(<DateTimePicker value={Date.now()} />).toJSON()
  expect(dateTimePicker.children.length).toEqual(2)
})

test('<DateTimePicker> renders only DatePicker when prop datePickerOnly is true', () => {
  const dateTimePicker = render(<DateTimePicker datePickerOnly value={Date.now()} />).toJSON()
  expect(dateTimePicker.children.length).toEqual(1)
})

test('<DateTimePicker> renders only TimePicker when prop timePickerOnly is true', () => {
  const dateTimePicker = render(<DateTimePicker timePickerOnly value={Date.now()} />).toJSON()
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
    ReactDOM.render(<DateTimePicker value={Date.now()} />, container)
  })
  const datePicker = container.querySelectorAll('input')[0]

  act(() => {
    datePicker.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  })

  expect(container.getElementsByClassName('react-datepicker-popper').length).toEqual(1)
})
