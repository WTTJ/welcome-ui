import React from 'react'

export const wrap = children =>
  React.Children.toArray(children).map(child =>
    typeof child === 'string' ? <span key={child}>{child}</span> : child
  )
