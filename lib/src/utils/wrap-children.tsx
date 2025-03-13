import React from 'react'

export const wrapChildren = (children?: string | JSX.Element): unknown =>
  React.Children.toArray(children).map(child =>
    ['number', 'string'].includes(typeof child) ? <span key={child}>{child}</span> : child
  )
