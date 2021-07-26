import { useCallback, useState } from 'react'
import copyToClipboard from 'copy-to-clipboard'

export function useCopyText(
  content: React.RefObject<HTMLElement & HTMLInputElement> | number | string,
  timeout: number
): [() => void, boolean] {
  const [copied, setCopied] = useState<boolean>()

  const copy = useCallback(() => {
    let value
    if (typeof content === 'number' || typeof content === 'string') {
      value = content.toString()
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
