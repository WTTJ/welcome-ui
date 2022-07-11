export const states = {
  visited: '&:visited',
  checked: '&:checked',
  hover: '&:hover',
  focus: '&:focus',
  active: '&:active',
  disabled: '&:disabled, &[aria-disabled=true]',
  placeholder: '&::placeholder',
}

export type ThemeStates = typeof states
