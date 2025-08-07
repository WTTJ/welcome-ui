export const theme = {
  borderWidth: '--border-width-sm',
  fontWeight: '--font-weight-bold',
  outlineWidth: '--border-width-md',
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
  lg: {
    fontSize: '--text-sm',
    height: '--height-button-lg',
    paddingX: '--spacing-xl',
  },
  md: {
    fontSize: '--text-sm',
    height: '--height-button-md',
    paddingX: '--spacing-xl',
  },
  sm: {
    fontSize: '--text-xs',
    height: '--height-button-sm',
    paddingX: '--spacing-sm',
  },
  xs: {
    fontSize: '--text-xs',
    height: '--height-button-xs',
    paddingX: '--spacing-sm',
  },
}

export const variants = {
  ghost: {
    backgroundColorActive: 'color-mix(in oklab, var(--color-neutral-90) 40%, transparent)',
    backgroundColorHover: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
    borderColor: 'transparent',
    borderColorActive: 'transparent',
    borderColorHover: 'transparent',
    outlineColorFocus: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
  },
  'ghost-danger': {
    backgroundColorActive: '--color-red-20',
    backgroundColorHover: '--color-red-10',
    borderColor: 'transparent',
    borderColorActive: '--color-red-20',
    borderColorHover: '--color-red-10',
    color: '--color-red-80',
    outlineColorFocus: '--color-red-40',
  },
  primary: {
    backgroundColor: '--color-primary-40',
    backgroundColorActive: '--color-primary-10',
    backgroundColorHover: '--color-primary-30',
    borderColor: '--color-primary-40',
    borderColorActive: '--color-primary-10',
    borderColorHover: '--color-primary-30',
    outlineColorFocus: '--color-primary-20',
  },
  'primary-danger': {
    backgroundColor: '--color-red-70',
    backgroundColorActive: '--color-red-50',
    backgroundColorHover: '--color-red-60',
    borderColor: '--color-red-70',
    borderColorActive: '--color-red-50',
    borderColorHover: '--color-red-60',
    color: '--color-neutral-10',
    outlineColorFocus: '--color-red-40',
  },
  secondary: {
    backgroundColor: '--color-neutral-90',
    backgroundColorActive: '--color-neutral-50',
    backgroundColorHover: '--color-neutral-70',
    borderColor: '--color-neutral-90',
    borderColorActive: '--color-neutral-50',
    borderColorHover: '--color-neutral-70',
    color: '--color-neutral-10',
    outlineColorFocus: '--color-neutral-40',
  },
  tertiary: {
    backgroundColor: '--color-neutral-10',
    backgroundColorActive: 'color-mix(in oklab, var(--color-neutral-90) 40%, transparent)',
    backgroundColorHover: 'color-mix(in oklab, var(--color-neutral-90) 10%, transparent)',
    borderColor: '--color-neutral-90',
    outlineColorFocus: '--color-neutral-40',
  },
  'tertiary-danger': {
    backgroundColor: '--color-neutral-10',
    backgroundColorActive: '--color-red-20',
    backgroundColorHover: '--color-red-10',
    borderColor: '--color-red-80',
    color: '--color-red-80',
    outlineColorFocus: '--color-red-40',
  },
}

export const variableMap = <T extends Record<string, string>>(token: T) => {
  return Object.entries(token).reduce(
    (acc, [key, value]) => {
      const isVariable = value.startsWith('--')
      const wrappedValue = isVariable ? `var(${value})` : value
      acc[`--${key}`] = wrappedValue
      return acc
    },
    {} as Record<string, string>
  )
}
