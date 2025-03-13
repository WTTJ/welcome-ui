import { getDate, getYears } from '../'

describe('getDate', () => {
  it('date between 2 intervals should return next interval date', () => {
    const timeInterval = 15
    const date = new Date().setHours(12, 16, 0, 0)
    const expectedDate = new Date().setHours(12, 30, 0, 0)
    expect(getDate(new Date(date), timeInterval)).toStrictEqual(new Date(expectedDate))
  })

  it('a date with minutes being a multiple of the interval should return interval date', () => {
    const timeInterval = 15
    const date = new Date().setHours(12, 30, 0, 0)
    const expectedDate = new Date().setHours(12, 30, 0, 0)
    expect(getDate(new Date(date), timeInterval)).toStrictEqual(new Date(expectedDate))
  })

  it('a date with minutes being a multiple of the interval should return interval date (seconds and milliseconds reset)', () => {
    const timeInterval = 15
    const date = new Date().setHours(12, 30, 59, 999)
    const expectedDate = new Date().setHours(12, 30, 0, 0)
    expect(getDate(new Date(date), timeInterval)).toStrictEqual(new Date(expectedDate))
  })

  it('getYears(1990, 2000) should be an array of options (reversed) between 1990 and 2000 incremented by 1', () => {
    expect(getYears(1990, 2000)).toStrictEqual([
      { label: '2000', value: 2000 },
      { label: '1999', value: 1999 },
      { label: '1998', value: 1998 },
      { label: '1997', value: 1997 },
      { label: '1996', value: 1996 },
      { label: '1995', value: 1995 },
      { label: '1994', value: 1994 },
      { label: '1993', value: 1993 },
      { label: '1992', value: 1992 },
      { label: '1991', value: 1991 },
      { label: '1990', value: 1990 },
    ])
  })
})
