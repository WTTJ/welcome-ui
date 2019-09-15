export const getSpacer = options =>
  options.reduce(
    (prev, current) => (current.label && prev.length > current.label.length ? prev : current.label),
    ''
  )
