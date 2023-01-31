const isSpan = (value: JSX.Element) => {
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

export const isTextValue = (value: React.ReactNode) => {
  return typeof value === 'object' ? isSpan(value as JSX.Element) : typeof value === 'string'
}
