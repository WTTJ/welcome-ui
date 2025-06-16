import type { JSX } from 'react'

const shouldWrapElementWithText = (value: JSX.Element) => {
  return (
    // <span />
    value?.type === 'span' ||
    // <Box as="span" />
    value?.props?.as === 'span' ||
    // <FormattedMessage />
    value?.props?.tagName === 'span' ||
    value?.props?.['data-wui-link'] === true
  )
}

export const shouldWrapWithText = (value: React.ReactNode) => {
  return typeof value === 'object'
    ? shouldWrapElementWithText(value as JSX.Element)
    : typeof value === 'string'
}
