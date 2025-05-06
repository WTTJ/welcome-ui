/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client'
import type { AlertProps } from '@/Alert'
import { Alert } from '@/Alert'

export const Blockquote = ({ children }: { children: JSX.Element[] }) => {
  const type = children[1].props.children[0]
  const child = children[1].props.children

  let variant: AlertProps['variant'] = 'default'
  let title

  if (type === 'Yay:') {
    variant = 'success'
  }
  if (type === 'Please note:') {
    variant = 'danger'
  }

  const childFormatted = child.reduce((prev: JSX.Element[], item: JSX.Element) => {
    const itemStringify = JSON.stringify(item)

    const isTypeFromSupernova =
      itemStringify.includes('Yay') ||
      itemStringify.includes('Some extra info') ||
      itemStringify.includes('Please note')

    const isDo = itemStringify.includes('DO')
    const isDont = itemStringify.includes("DON'T")

    const startOfArray = prev.length === 0
    const isBr = item?.type === 'br'

    if (isTypeFromSupernova) {
      return prev
    } else if (startOfArray && isBr) {
      return prev
    } else if (isDont) {
      title = 'Don’t'

      //@ts-ignore
      prev.push(item.replace("*DON'T\n*", ''))
    } else if (isDo) {
      title = 'Do'

      //@ts-ignore
      prev.push(item.replace('*DO\n*', ''))
    } else {
      prev.push(item)
    }
    return prev
  }, [])

  return (
    <Alert maxW="100vw" variant={variant} w="100%">
      {title ? <Alert.Title>{title}</Alert.Title> : null}
      {childFormatted}
    </Alert>
  )
}
