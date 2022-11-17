export const states = {
  first: '&:first-child',
  last: '&:last-child',
  odd: '&:odd',
  even: '&:even',
  visited: '&:visited',
  checked: '&:checked',
  focusWithin: '&:focus-within',
  hover: '&:hover',
  focus: '&:focus',
  active: '&:active',
  disabled: '&:disabled, &[aria-disabled=true]',
  placeholder: '&::placeholder',
}

export type ThemeStates = typeof states
