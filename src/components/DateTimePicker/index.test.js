import React from 'react'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Form, getFormValues } from '../../../docz/Form'
import { render } from '../../utils/tests'
import { ConnectedField } from '../ConnectedField'

import { DateTimePicker } from './index'

describe('<DateTimePicker />', () => {
  test('<DateTimePicker> renders correctly', () => {
    const { getByTestId } = render(
      <Form initialValues={{ welcome: new Date() }}>
        <ConnectedField component={DateTimePicker} dataTestId="dateTimePicker" name="welcome" />
      </Form>
    )
    const dateTimePicker = getByTestId('dateTimePicker')
    expect(dateTimePicker.children).toHaveLength(2)
  })

  test('<DateTimePicker> renders correctly with invalid date', () => {
    const { getByTestId } = render(
      <Form initialValues={{ welcome: '2019-11-23' }}>
        <ConnectedField component={DateTimePicker} dataTestId="dateTimePicker" name="welcome" />
      </Form>
    )
    const dateTimePicker = getByTestId('dateTimePicker')
    expect(dateTimePicker.children).toHaveLength(2)
  })

  test('can render and opens the datePicker on click', () => {
    const { baseElement, container } = render(
      <Form initialValues={{ welcome: new Date() }}>
        <ConnectedField component={DateTimePicker} name="welcome" />
      </Form>
    )
    const datePicker = container.querySelector('.date-picker')
    fireEvent.click(datePicker)

    const datePickerPopper = baseElement.querySelectorAll('.date-picker-popper')
    const timePickerPopper = baseElement.querySelectorAll('.time-picker-popper')
    expect(datePickerPopper).toHaveLength(1)
    expect(timePickerPopper).toHaveLength(0)
  })

  test('can render and opens the timePicker on click', () => {
    const { baseElement, container } = render(
      <Form initialValues={{ welcome: new Date() }}>
        <ConnectedField component={DateTimePicker} name="welcome" />
      </Form>
    )
    const timePicker = container.querySelector('.time-picker')
    fireEvent.click(timePicker)

    const datePickerPopper = baseElement.querySelectorAll('.date-picker-popper')
    const timePickerPopper = baseElement.querySelectorAll('.time-picker-popper')
    expect(datePickerPopper).toHaveLength(0)
    expect(timePickerPopper).toHaveLength(1)
  })

  test('<DateTimePicker> renders month select', () => {
    const { container, getAllByRole } = render(
      <Form initialValues={{ welcome: new Date('09/11/2001') }}>
        <ConnectedField component={DateTimePicker} name="welcome" />
      </Form>
    )
    const datePicker = container.querySelector('.date-picker')
    expect(datePicker).toHaveValue('11/09/2001')

    fireEvent.click(datePicker)

    const [monthSelect, yearSelect] = getAllByRole('combobox')

    expect(monthSelect).toHaveTextContent('September')
    expect(yearSelect).toHaveTextContent('2001')
  })

  test('<DateTimePicker> can proceed through next/prev months', () => {
    const { container, getAllByRole, getByTitle } = render(
      <Form initialValues={{ welcome: new Date('09/11/2001') }}>
        <ConnectedField component={DateTimePicker} name="welcome" />
      </Form>
    )
    const datePicker = container.querySelector('.date-picker')

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
    const { container, getAllByRole, debug } = render(
      <Form initialValues={{ welcome: new Date('09/11/2001') }}>
        <ConnectedField component={DateTimePicker} name="welcome" />
      </Form>
    )
    const datePicker = container.querySelector('.date-picker')

    userEvent.type(datePicker, '20/06/2018')
    fireEvent.click(datePicker)

    const [monthSelect, yearSelect] = getAllByRole('combobox')
    debug(monthSelect)
    expect(monthSelect).toHaveTextContent('June')
    expect(yearSelect).toHaveTextContent('2018')
  })

  test('<DatePicker> can be cleared and has no `ClearButton` when no value', () => {
    const { container, getAllByRole, getByTestId } = render(
      <Form initialValues={{ welcome: new Date() }}>
        <ConnectedField component={DateTimePicker} name="welcome" />
      </Form>
    )

    const datePicker = container.querySelector('.date-picker')
    const [clearButton] = getAllByRole('button')

    fireEvent.click(clearButton)

    expect(datePicker).toHaveValue('')

    const formValues = getFormValues(getByTestId('values'))
    expect(formValues.welcome).toBeNull()
    expect(clearButton).not.toBeInTheDocument()

    userEvent.type(datePicker, '20/06/2018')

    expect(datePicker).toHaveValue('20/06/2018')
    expect(getAllByRole('button')[0]).toBeInTheDocument()
  })
})
