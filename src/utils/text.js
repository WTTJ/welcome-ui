export const makeUnique = prefix =>
  prefix
    ? `${prefix}-${Math.random()
        .toString(32)
        .substr(2, 6)}`
    : prefix
