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
