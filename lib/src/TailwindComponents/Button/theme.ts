export const theme = {
  transitionDuration: '--duration-medium',
}

export const shapes = {
  circle: {
    borderRadius: '50%',
  },
  square: {
    borderRadius: '--radius-md',
  },
}

export const sizes = {
  md: {
    fontSize: '--text-sm',
    paddingX: '--spacing-lg',
    paddingY: '--spacing-md',
  },
}

export const variants = {
  disabled: {
    backgroundColor: '--color-beige-40',
    borderColor: '--color-beige-40',
  },
  ghost: {
    backgroundColor: '--color-transparent',
  },
  primary: {
    backgroundColor: '--color-primary-40',
  },
  secondary: {
    backgroundColor: '--color-neutral-90',
  },
  tertiary: {
    backgroundColor: '--color-neutral-10',
  },
}

export const variableMap = <T extends Record<string, string>>(map: T) => {
  return Object.entries(map).reduce(
    (acc, [key, value]) => {
      const wrappedValue = value.startsWith('--') ? `var(${value})` : value
      const variableClass = `--${key}: ${wrappedValue};`
      acc[key] = variableClass
      return acc
    },
    {} as Record<string, string>
  )
}
