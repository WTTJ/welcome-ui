import React from 'react'
import { fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DatePicker } from '@welcome-ui/date-picker'
import { TimePicker } from '@welcome-ui/time-picker'

import { render } from '../../../utils/tests'
import { DateTimePicker } from '../src'

jest.mock('popper.js', () => {
  const PopperJS = jest.requireActual('popper.js')

  return class {
    static placements = PopperJS.placements

    constructor() {
      return {
        destroy: () => {
          return {}
        },
        scheduleUpdate: () => {
          return {}
        },
      }
    }
  }
})

describe('<DateTimePicker />', () => {
  test('<DateTimePicker> renders correctly', () => {
    const { getByTestId } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()} />
    )
    const dateTimePicker = getByTestId('dateTimePicker')

    const datePicker = dateTimePicker.querySelector('.date-picker')
    const timePicker = dateTimePicker.querySelector('.time-picker')
    expect(datePicker).toBeInTheDocument()
    expect(timePicker).toBeInTheDocument()
  })

  test('<DateTimePicker> renders correctly with invalid date', () => {
    const { getByTestId } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value="2019-11-23" />
    )
    const dateTimePicker = getByTestId('dateTimePicker')

    const datePicker = dateTimePicker.querySelector('.date-picker')
    const timePicker = dateTimePicker.querySelector('.time-picker')
    expect(datePicker).toBeInTheDocument()
    expect(timePicker).toBeInTheDocument()
  })

  test('can render and opens the datePicker on click', () => {
    const { baseElement, container } = render(<DateTimePicker name="welcome" value={new Date()} />)
    const datePicker = container.querySelector('.date-picker')
    fireEvent.click(datePicker)

    const datePickerPopper = baseElement.querySelector('.date-picker-popper')
    const timePickerPopper = baseElement.querySelector('.time-picker-popper')
    expect(datePickerPopper).toBeInTheDocument()
    expect(timePickerPopper).not.toBeInTheDocument()
  })

  test('can render and opens the timePicker on click', () => {
    const { baseElement, container } = render(<DateTimePicker name="welcome" value={new Date()} />)
    const timePicker = container.querySelector('.time-picker')
    fireEvent.click(timePicker)

    const datePickerPopper = baseElement.querySelector('.date-picker-popper')
    const timePickerPopper = baseElement.querySelector('.time-picker-popper')
    expect(datePickerPopper).not.toBeInTheDocument()
    expect(timePickerPopper).toBeInTheDocument()
  })

  test('<DateTimePicker> renders month select', () => {
    const { container, getAllByRole } = render(
      <DateTimePicker name="welcome" value={new Date('09/11/2001')} />
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
      <DateTimePicker name="welcome" value={new Date('09/11/2001')} />
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

  test('<DateTimePicker> updating text updates selects', async () => {
    const { container, getAllByRole } = render(
      <DateTimePicker name="welcome" value={new Date('09/11/2001')} />
    )
    const datePicker = container.querySelector('.date-picker')

    await userEvent.clear(datePicker)
    await userEvent.type(datePicker, '20/06/2018')
    fireEvent.click(datePicker)

    const [monthSelect, yearSelect] = getAllByRole('combobox')
    expect(monthSelect).toHaveTextContent('June')
    expect(yearSelect).toHaveTextContent('2018')
  })

  test('<DateTimePicker> timeIntervals prop defaults to 15', () => {
    const { baseElement, container } = render(
      <DateTimePicker name="welcome" value={new Date('11/23/1987')} />
    )

    const datePicker = container.querySelector('.date-picker')
    const timePicker = container.querySelector('.time-picker')

    expect(datePicker).toHaveValue('23/11/1987')
    expect(timePicker).toHaveValue('00:00')

    fireEvent.click(timePicker)

    const timePickerPopperItems = baseElement.querySelectorAll('.react-datepicker__time-list-item')
    const firstTimeValueEl = timePickerPopperItems[0]
    const secondTimeValueEl = timePickerPopperItems[1]
    expect(firstTimeValueEl).toHaveTextContent('12:00 AM')
    expect(secondTimeValueEl).toHaveTextContent('12:15 AM')
  })

  test('<DateTimePicker> timeIntervals works properly', () => {
    const { baseElement, container } = render(
      <DateTimePicker name="welcome" value={new Date('11/23/1987')}>
        <DatePicker value={null} />
        <TimePicker timeIntervals={5} value={null} />
      </DateTimePicker>
    )

    const datePicker = container.querySelector('.date-picker')
    const timePicker = container.querySelector('.time-picker')

    expect(datePicker).toHaveValue('23/11/1987')
    expect(timePicker).toHaveValue('00:00')

    fireEvent.click(timePicker)

    const timePickerPopperItems = baseElement.querySelectorAll('.react-datepicker__time-list-item')
    const firstTimeValueEl = timePickerPopperItems[0]
    const secondTimeValueEl = timePickerPopperItems[1]
    expect(firstTimeValueEl).toHaveTextContent('12:00 AM')
    expect(secondTimeValueEl).toHaveTextContent('12:05 AM')

    fireEvent.click(secondTimeValueEl)

    expect(timePicker).toHaveValue('00:05')
  })

  test('<DatePicker> can be cleared and has no `ClearButton` when no value', async () => {
    const { container, getAllByRole } = render(<DateTimePicker name="welcome" value={new Date()} />)

    const datePicker = container.querySelector('.date-picker')
    const [clearButton] = getAllByRole('button')

    fireEvent.click(clearButton)

    expect(datePicker).toHaveValue('')

    expect(clearButton).not.toBeInTheDocument()

    await userEvent.type(datePicker, '20/06/2018')

    expect(datePicker).toHaveValue('20/06/2018')
    expect(getAllByRole('button')[0]).toBeInTheDocument()
  })
})
