import { useCallback, useState } from 'react'
import copyToClipboard from 'copy-to-clipboard'

type Content = React.RefObject<HTMLElement | HTMLInputElement> | number | string
type Timeout = number
type useCopyTextReturn = [() => void, boolean]

export function useCopyText(content: Content, timeout: Timeout): useCopyTextReturn {
  const [copied, setCopied] = useState<boolean>(false)

  const copy = useCallback(() => {
    let value

    if (typeof content === 'number' || typeof content === 'string') {
      value = content.toString()
    } else if (content.current instanceof HTMLInputElement) {
      value = content.current.value
    } else if (content.current instanceof HTMLElement) {
      value = content.current.textContent
    }

    const copiedString = value && copyToClipboard(value)
    setCopied(copiedString || false)

    if (timeout) {
      setTimeout(setCopied, timeout)
    }
  }, [content, timeout])

  return [copy, copied]
}
