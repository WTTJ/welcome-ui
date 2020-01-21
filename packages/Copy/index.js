import React, { useCallback, useState } from 'react'
import get from 'lodash.get'
import { elementType, number, oneOfType, shape, string } from 'prop-types'
import copyToClipboard from 'copy-to-clipboard'

export function useCopyText(content, timeout) {
  const [copied, setCopied] = useState()

  const copy = useCallback(() => {
    let value
    if (['number', 'string'].includes(typeof content)) {
      value = content
    } else if (content.current) {
      value = content.current.textContent || content.current.value
    }

    const copiedString = copyToClipboard(value)
    setCopied(copiedString)

    if (timeout) {
      setTimeout(setCopied, timeout)
    }
  }, [content, timeout])

  return [copy, copied]
}
