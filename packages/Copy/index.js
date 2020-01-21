import React from 'react'
import copyToClipboard from 'copy-to-clipboard'

export function useCopyText(copyRef, timeout) {
  const [copied, setCopied] = React.useState()

  const copy = React.useCallback(() => {
    const value =
      copyRef && copyRef.current && (copyRef.current.textContent || copyRef.current.value)
    const copiedString = copyToClipboard(value)
    setCopied(copiedString)

    if (timeout) {
      setTimeout(setCopied, timeout)
    }
  }, [copyRef, timeout])

  return [copy, copied]
}
