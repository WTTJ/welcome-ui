import React from 'react'

export const wrap = children =>
  React.Children.toArray(children).map(child =>
    ['number', 'string'].includes(typeof child) ? <span key={child}>{child}</span> : child
  )
