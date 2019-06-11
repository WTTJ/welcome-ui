import { getDate } from './utils'

test('date between 2 intervals should return next interval date', () => {
  const timeInterval = 15
  const date = new Date().setHours(12, 16, 0, 0)
  const expectedDate = new Date().setHours(12, 30, 0, 0)
  expect(getDate(new Date(date), timeInterval)).toStrictEqual(new Date(expectedDate))
})

test('a date with minutes being a multiple of the interval should return interval date', () => {
  const timeInterval = 15
  const date = new Date().setHours(12, 30, 0, 0)
  const expectedDate = new Date().setHours(12, 30, 0, 0)
  expect(getDate(new Date(date), timeInterval)).toStrictEqual(new Date(expectedDate))
})

test('a date with minutes being a multiple of the interval should return interval date (seconds and milliseconds reset)', () => {
  const timeInterval = 15
  const date = new Date().setHours(12, 30, 59, 999)
  const expectedDate = new Date().setHours(12, 30, 0, 0)
  expect(getDate(new Date(date), timeInterval)).toStrictEqual(new Date(expectedDate))
})
