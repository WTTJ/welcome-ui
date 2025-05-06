'use client'
import { useServerInsertedHTML } from 'next/navigation'
import * as React from 'react'
import { type IStyleSheetManager, ServerStyleSheet, StyleSheetManager } from 'styled-components'

interface StyledComponentsRegistryProps {
  children: IStyleSheetManager['children']
}

const StyledComponentsRegistry = ({ children }: StyledComponentsRegistryProps) => {
  const [styledComponentsStyleSheet] = React.useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()

    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
  )
}

export default StyledComponentsRegistry
