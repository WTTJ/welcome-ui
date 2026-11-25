import { useCallback, useState } from 'react'

type Content = number | React.RefObject<HTMLElement | HTMLInputElement> | string
type Timeout = number
type useCopyTextReturn = [() => void, boolean]

export function useCopyText(content: Content, timeout: Timeout): useCopyTextReturn {
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

    // Undefined outside secure contexts (plain HTTP)
    if (!navigator.clipboard) {
      setCopied(false)
      return
    }

    navigator.clipboard.writeText(value ?? '').then(
      () => {
        setCopied(true)

        if (timeout) {
          setTimeout(setCopied, timeout)
        }
      },
      () => setCopied(false)
    )
  }, [content, timeout])

  return [copy, copied]
}
