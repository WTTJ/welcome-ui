import React from 'react'

export const wrapChildren = children =>
  React.Children.toArray(children).map(child =>
    ['number', 'string'].includes(typeof child) ? <span key={child}>{child}</span> : child
  )
