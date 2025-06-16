import type { ReactElement } from 'react'
import React from 'react'

export const wrapChildren = (children?: ReactElement | string): unknown =>
  React.Children.toArray(children).map(child =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    ['number', 'string'].includes(typeof child) ? <span key={child}>{child}</span> : child
  )
