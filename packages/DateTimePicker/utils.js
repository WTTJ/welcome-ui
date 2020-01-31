import range from 'lodash.range'

const MONTHS = [
  { value: 0, label: 'January' },
  { value: 1, label: 'February' },
  { value: 2, label: 'March' },
  { value: 3, label: 'April' },
  { value: 4, label: 'May' },
  { value: 5, label: 'June' },
  { value: 6, label: 'July' },
  { value: 7, label: 'August' },
  { value: 8, label: 'September' },
  { value: 9, label: 'October' },
  { value: 10, label: 'November' },
  { value: 11, label: 'December' }
]

export const DEFAULT_DATE = new Date()

export const getDate = (date, interval) => {
  if (!date) {
    return null
  }

  // If invalid date, use today
  let newDate = new Date(date)
  if (isNaN(newDate.getTime())) {
    newDate = new Date()
  }

  // Round to nearest interval
  const nextInterval = Math.ceil(newDate.getMinutes() / interval) * interval
  // Set minutes to nearest interval
  return new Date(newDate.setMinutes(nextInterval, 0, 0))
}

export const getMonths = locale => {
  if (!locale) {
    return MONTHS
  }

  return MONTHS.map((item, index) => ({
    ...item,
    label: locale.localize.month(index)
  }))
}

export const getYears = (startYear, endYear) =>
  range(startYear, endYear + 1)
    .map(year => ({
      label: year,
      value: year
    }))
    .reverse()
