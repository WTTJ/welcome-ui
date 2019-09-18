import { getDate, range } from './utils'

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

test('range(1990, 2000) should be an array of numbers between 1990 and 2000 incremented by 1', () => {
  expect(range(1990, 2000)).toStrictEqual([
    1990,
    1991,
    1992,
    1993,
    1994,
    1995,
    1996,
    1997,
    1998,
    1999,
    2000
  ])
})
