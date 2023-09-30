/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'

import * as React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager, StyleSheetManagerProps } from 'styled-components'

interface StyledComponentsRegistryProps {
  children: StyleSheetManagerProps['children']
}

const StyledComponentsRegistry = ({ children }: StyledComponentsRegistryProps) => {
  const [styledComponentsStyleSheet] = React.useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    //@ts-ignore
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
  )
}

export default StyledComponentsRegistry
