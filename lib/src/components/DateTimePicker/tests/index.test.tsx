import React from 'react'
import { act, screen } from '@testing-library/react'

import { DatePicker } from '../../DatePicker'
import { TimePicker } from '../../TimePicker'
import { DateTimePicker } from '../'
import { render } from '../../../../tests'

// jest.mock('popper.js', () => {
//   const PopperJS = jest.requireActual('popper.js')

//   return class {
//     static placements = PopperJS.placements

//     constructor() {
//       return {
//         destroy: () => {
//           return {}
//         },
//         scheduleUpdate: () => {
//           return {}
//         },
//       }
//     }
//   }
// })

describe('<DateTimePicker />', () => {
  test('<DateTimePicker> renders correctly', () => {
    render(<DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()} />)

    const dateTimePicker = screen.getByTestId('dateTimePicker')
    const datePicker = dateTimePicker.querySelector('.date-picker')
    const timePicker = dateTimePicker.querySelector('.time-picker')

    expect(datePicker).toBeInTheDocument()
    expect(timePicker).toBeInTheDocument()
  })

  test('<DateTimePicker> renders correctly with invalid date', () => {
    render(<DateTimePicker dataTestId="dateTimePicker" name="welcome" value="2019-11-23" />)

    const dateTimePicker = screen.getByTestId('dateTimePicker')
    const datePicker = dateTimePicker.querySelector('.date-picker')
    const timePicker = dateTimePicker.querySelector('.time-picker')

    expect(datePicker).toBeInTheDocument()
    expect(timePicker).toBeInTheDocument()
  })

  test('can render and opens the datePicker on click', async () => {
    const { baseElement, user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()} />
    )

    const datePicker = screen.getByTestId('dateTimePicker-datePicker')

    await act(() => user.click(datePicker))

    const datePickerPopper = baseElement.querySelector('.date-picker-popper')
    const timePickerPopper = baseElement.querySelector('.time-picker-popper')

    expect(datePickerPopper).toBeInTheDocument()
    expect(timePickerPopper).not.toBeInTheDocument()
  })

  test('can render and opens the timePicker on click', async () => {
    const { baseElement, user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()} />
    )

    const timePicker = screen.getByTestId('dateTimePicker-timePicker')

    await act(() => user.click(timePicker))

    const datePickerPopper = baseElement.querySelector('.date-picker-popper')
    const timePickerPopper = baseElement.querySelector('.time-picker-popper')

    expect(datePickerPopper).not.toBeInTheDocument()
    expect(timePickerPopper).toBeInTheDocument()
  })

  test('<DateTimePicker> renders month select', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('09/11/2001')} />
    )

    const datePicker = screen.getByTestId('dateTimePicker-datePicker')

    expect(datePicker).toHaveValue('11/09/2001')

    await act(() => user.click(datePicker))

    const [monthSelect, yearSelect] = screen.getAllByRole('combobox')

    expect(monthSelect).toHaveTextContent('September')
    expect(yearSelect).toHaveTextContent('2001')
  })

  test('<DateTimePicker> can proceed through next/prev months', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('09/11/2001')} />
    )

    const datePicker = screen.getByTestId('dateTimePicker-datePicker')

    await act(() => user.click(datePicker))

    const decreaseMonth = screen.getByTitle('Previous month')
    const increaseMonth = screen.getByTitle('Next month')
    const [monthSelect, yearSelect] = screen.getAllByRole('combobox')

    expect(monthSelect).toHaveTextContent('September')
    expect(yearSelect).toHaveTextContent('2001')

    await act(() => user.click(decreaseMonth))

    expect(monthSelect).toHaveTextContent('August')
    expect(yearSelect).toHaveTextContent('2001')

    await act(() => {
      user.click(increaseMonth)
      return user.click(increaseMonth)
    })

    expect(monthSelect).toHaveTextContent('October')
    expect(yearSelect).toHaveTextContent('2001')

    await act(() => {
      user.click(increaseMonth)
      user.click(increaseMonth)
      return user.click(increaseMonth)
    })

    expect(monthSelect).toHaveTextContent('January')
    expect(yearSelect).toHaveTextContent('2002')

    await act(() => user.click(decreaseMonth))

    expect(monthSelect).toHaveTextContent('December')
    expect(yearSelect).toHaveTextContent('2001')
  })

  test('<DateTimePicker> updating text updates selects', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('09/11/2001')} />
    )

    const datePicker = screen.getByTestId('dateTimePicker-datePicker')

    await act(() => {
      user.clear(datePicker)
      return user.type(datePicker, '20/06/2018')
    })

    await act(() => user.click(datePicker))

    const [monthSelect, yearSelect] = screen.getAllByRole('combobox')

    expect(monthSelect).toHaveTextContent('June')
    expect(yearSelect).toHaveTextContent('2018')
  })

  test('<DateTimePicker> timeIntervals prop defaults to 15', async () => {
    const { baseElement, user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('11/23/1987')} />
    )

    const datePicker = screen.getByTestId('dateTimePicker-datePicker')
    const timePicker = screen.getByTestId('dateTimePicker-timePicker')

    expect(datePicker).toHaveValue('23/11/1987')
    expect(timePicker).toHaveValue('00:00')

    await act(() => user.click(timePicker))

    const timePickerPopperItems = baseElement.querySelectorAll('.react-datepicker__time-list-item')
    const firstTimeValueEl = timePickerPopperItems[0]
    const secondTimeValueEl = timePickerPopperItems[1]

    expect(firstTimeValueEl).toHaveTextContent('12:00 AM')
    expect(secondTimeValueEl).toHaveTextContent('12:15 AM')
  })

  test('<DateTimePicker> timeIntervals works properly', async () => {
    const { baseElement, user } = render(
      <DateTimePicker name="welcome" value={new Date('11/23/1987')}>
        <DatePicker dataTestId="datePicker" value="" />
        <TimePicker dataTestId="timePicker" timeIntervals={5} value="" />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('datePicker')
    const timePicker = screen.getByTestId('timePicker')

    expect(datePicker).toHaveValue('23/11/1987')
    expect(timePicker).toHaveValue('00:00')

    await act(() => user.click(timePicker))

    const timePickerPopperItems = baseElement.querySelectorAll('.react-datepicker__time-list-item')
    const firstTimeValueEl = timePickerPopperItems[0]
    const secondTimeValueEl = timePickerPopperItems[1]

    expect(firstTimeValueEl).toHaveTextContent('12:00 AM')
    expect(secondTimeValueEl).toHaveTextContent('12:05 AM')

    await act(() => user.click(secondTimeValueEl))

    expect(timePicker).toHaveValue('00:05')
  })

  test('<DatePicker> can be cleared and has no `ClearButton` when no value', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()} />
    )

    const datePicker = screen.getByTestId('dateTimePicker-datePicker')
    const [clearButton] = screen.getAllByRole('button')

    await act(() => user.click(clearButton))

    expect(datePicker).toHaveValue('')
    expect(clearButton).not.toBeInTheDocument()
  })
})
