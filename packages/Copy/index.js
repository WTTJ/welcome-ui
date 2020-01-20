import React from 'react'
import copyToClipboard from 'copy-to-clipboard'

export function useCopyText(text, timeout) {
  const copyableString = React.useRef(text)
  const [copied, setCopied] = React.useState(false)
  const copy = React.useCallback(() => {
    const copiedString = copyToClipboard(copyableString.current)
    setCopied(copiedString)

    // add a timeout to remove copied
    if (timeout) {
      setTimeout(() => setCopied(), timeout)
    }
  }, [copyableString, timeout])

  React.useEffect(() => {
    copyableString.current = text
  }, [text])

  return [copy, copied, setCopied]
}
