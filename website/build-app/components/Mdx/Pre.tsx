'use client'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import * as React from 'react'

interface PreProps {
  children: React.ReactNode[]
}

export function Pre({ children }: PreProps) {
  // @ts-ignore
  const [code] = children[0].props.children
  const [codeUpdated, setCodeUpdate] = React.useState(code)

  const onChange = React.useCallback((newCode: React.ReactNode) => {
    setCodeUpdate(newCode)
  }, [])

  return (
    <CodeMirror
      value={codeUpdated}
      height="200px"
      extensions={[javascript({ jsx: true, typescript: true })]}
      onChange={onChange}
    />
  )
}
