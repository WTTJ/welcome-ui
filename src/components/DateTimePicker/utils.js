export const getDate = (newDate, interval) => {
  let minutes = new Date(newDate).getMinutes()
  let minutesToPreviousInterval = minutes % interval
  let nextMinutesInterval =
    minutes - minutesToPreviousInterval + (minutesToPreviousInterval === 0 ? 0 : interval)
  let nextDateInterval = new Date(newDate).setMinutes(nextMinutesInterval, 0, 0)

  return new Date(nextDateInterval)
}
