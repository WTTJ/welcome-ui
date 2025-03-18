import React from 'react'

export const wrapChildren = (children?: JSX.Element | string): unknown =>
  React.Children.toArray(children).map(child =>
    ['number', 'string'].includes(typeof child) ? <span key={child}>{child}</span> : child
  )
