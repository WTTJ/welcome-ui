import { screen } from '@testing-library/react'

import { DatePicker } from '@/components/DatePicker'
import { TimePicker } from '@/components/TimePicker'

import { render } from '@tests'

import { DateTimePicker } from '../'
import type { LocalesKey } from '../utils'
import { getLocale } from '../utils'

describe('<DateTimePicker />', () => {
  it('<DateTimePicker> renders correctly', () => {
    render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')
    const timePicker = screen.getByTestId('dateTimePicker-time-picker')

    expect(datePicker).toBeInTheDocument()
    expect(timePicker).toBeInTheDocument()
  })

  it('<DateTimePicker> renders correctly with invalid date', () => {
    render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value="2019-11-23">
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')
    const timePicker = screen.getByTestId('dateTimePicker-time-picker')

    expect(datePicker).toBeInTheDocument()
    expect(timePicker).toBeInTheDocument()
  })

  it('can render and opens the datePicker on click', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')

    await user.click(datePicker)

    const datePickerPopper = screen.queryByLabelText('Choose Date')
    const timePickerPopper = screen.queryByLabelText('Choose Time')

    expect(datePickerPopper).toBeInTheDocument()
    expect(timePickerPopper).not.toBeInTheDocument()
  })

  it('can render and opens the timePicker on click', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const timePicker = screen.getByTestId('dateTimePicker-time-picker')

    await user.click(timePicker)

    const datePickerPopper = screen.queryByLabelText('Choose Date')
    const timePickerPopper = screen.queryByLabelText('Choose Time')

    expect(datePickerPopper).not.toBeInTheDocument()
    expect(timePickerPopper).toBeInTheDocument()
  })

  it('<DateTimePicker> renders month select', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('09/11/2001')}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')

    expect(datePicker).toHaveValue('11/09/2001')

    await user.click(datePicker)

    const [monthSelect, yearSelect] = screen.getAllByRole('combobox')
    expect(monthSelect).toHaveTextContent('September')
    expect(yearSelect).toHaveTextContent('2001')
  })

  it('<DateTimePicker> can proceed through next/prev months', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('09/11/2001')}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')

    await user.click(datePicker)

    const decreaseMonth = screen.getByTitle('Previous month')
    const increaseMonth = screen.getByTitle('Next month')

    const [monthSelect, yearSelect] = screen.getAllByRole('combobox')
    expect(monthSelect).toHaveTextContent('September')
    expect(yearSelect).toHaveTextContent('2001')

    await user.click(decreaseMonth)

    expect(monthSelect).toHaveTextContent('August')
    expect(yearSelect).toHaveTextContent('2001')

    await user.click(increaseMonth)
    await user.click(increaseMonth)

    expect(monthSelect).toHaveTextContent('October')
    expect(yearSelect).toHaveTextContent('2001')

    await user.click(increaseMonth)
    await user.click(increaseMonth)
    await user.click(increaseMonth)

    expect(monthSelect).toHaveTextContent('January')
    expect(yearSelect).toHaveTextContent('2002')

    await user.click(decreaseMonth)

    expect(monthSelect).toHaveTextContent('December')
    expect(yearSelect).toHaveTextContent('2001')
  })

  it('<DateTimePicker> updating text updates selects', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('09/11/2001')}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')

    await user.clear(datePicker)
    await user.type(datePicker, '20/06/2018')
    await user.click(datePicker)

    const [monthSelect, yearSelect] = screen.getAllByRole('combobox')
    expect(monthSelect).toHaveTextContent('June')
    expect(yearSelect).toHaveTextContent('2018')
  })

  it('<DateTimePicker> timeIntervals prop defaults to 15', async () => {
    const { baseElement, user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date('11/23/1987')}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')
    const timePicker = screen.getByTestId('dateTimePicker-time-picker')

    expect(datePicker).toHaveValue('23/11/1987')
    expect(timePicker).toHaveValue('00:00')

    await user.click(timePicker)

    const timePickerPopperItems = baseElement.querySelectorAll('.react-datepicker__time-list-item')
    const firstTimeValueEl = timePickerPopperItems[0]
    const secondTimeValueEl = timePickerPopperItems[1]

    expect(firstTimeValueEl).toHaveTextContent('12:00 AM')
    expect(secondTimeValueEl).toHaveTextContent('12:15 AM')
  })

  it('<DateTimePicker> timeIntervals works properly', async () => {
    const { baseElement, user } = render(
      <DateTimePicker
        dataTestId="dateTimePicker"
        name="welcome"
        timeIntervals={5}
        value={new Date('11/23/1987')}
      >
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')
    const timePicker = screen.getByTestId('dateTimePicker-time-picker')

    expect(datePicker).toHaveValue('23/11/1987')
    expect(timePicker).toHaveValue('00:00')

    await user.click(timePicker)

    const timePickerPopperItems = baseElement.querySelectorAll('.react-datepicker__time-list-item')
    const firstTimeValueEl = timePickerPopperItems[0]
    const secondTimeValueEl = timePickerPopperItems[1]

    expect(firstTimeValueEl).toHaveTextContent('12:00 AM')
    expect(secondTimeValueEl).toHaveTextContent('12:05 AM')

    await user.click(secondTimeValueEl)

    expect(timePicker).toHaveValue('00:05')
  })

  it('<DatePicker> can be cleared and has no `ClearButton` when no value', async () => {
    const { user } = render(
      <DateTimePicker dataTestId="dateTimePicker" name="welcome" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    )

    const datePicker = screen.getByTestId('dateTimePicker-date-picker')
    const [clearButton] = screen.getAllByRole('button')

    await user.click(clearButton)

    expect(datePicker).toHaveValue('')
    expect(clearButton).not.toBeInTheDocument()
  })
})

describe('getLocale', () => {
  it('returns the correct locale for a valid locale code', () => {
    const locale = getLocale('fr')
    expect(locale.code).toBe('fr')
  })

  it('returns the browser locale if the provided locale is invalid', () => {
    const locale = getLocale('invalid-locale' as LocalesKey)
    expect(locale.code).toBe(navigator.language)
  })

  it('returns the default locale if no valid locale is provided', () => {
    const locale = getLocale()
    expect(locale.code).toBe('en-US')
  })
})
