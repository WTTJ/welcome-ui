export const createEvent = ({ name, value }) => ({
  preventDefault: () => {},
  target: { name, value }
})
