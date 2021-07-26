import { useCallback, useState } from 'react'
import copyToClipboard from 'copy-to-clipboard'

export function useCopyText(
  content: React.RefObject<HTMLElement | HTMLInputElement> | number | string,
  timeout: number
): [() => void, boolean] {
  const [copied, setCopied] = useState<boolean>()

  const copy = useCallback(() => {
    let value
    if (typeof content === 'number' || typeof content === 'string') {
      value = content.toString()
    } else if (content.current instanceof HTMLInputElement) {
      value = content.current.value
    } else if (content.current instanceof HTMLElement) {
      value = content.current.textContent
    }

    const copiedString = copyToClipboard(value)
    setCopied(copiedString)

    if (timeout) {
      setTimeout(setCopied, timeout)
    }
  }, [content, timeout])

  return [copy, copied]
}
