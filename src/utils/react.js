import React from 'react'

export const wrap = children =>
  React.Children.toArray(children).map(child =>
    typeof child === 'string' ? <span>{child}</span> : child
  )
