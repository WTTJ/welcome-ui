import React, { cloneElement } from 'react'
import toastRHT, { Toast, ToastPosition } from 'react-hot-toast/headless'

import * as S from './styles'
import { POSITION_STYLE } from './utils'

type ToastWrapperProps = {
  calculateOffset: (
    toast: Toast,
    opts?: {
      reverseOrder?: boolean
      gutter?: number
      defaultPosition?: ToastPosition
    }
  ) => number
  toast: Toast & CustomToastOptions
  updateHeight: (toastId: string, height: number) => void
}

type CustomToastOptions = {
  onClose?: () => void
}

export const ToastWrapper: React.FC<ToastWrapperProps> = ({
  calculateOffset,
  toast,
  updateHeight,
}) => {
  if (typeof toast.message === 'string') {
    // eslint-disable-next-line no-console
    console.warn('You must pass a React component or a HTML element.')
    return null
  }

  const offset = calculateOffset(toast, { reverseOrder: false, gutter: 0 })

  const ref = (element: HTMLElement | null) => {
    if (element && typeof toast.height !== 'number') {
      const height = element.getBoundingClientRect().height
      updateHeight(toast.id, height)
    }
  }

  const center = toast.position?.includes('center')
  const top = toast.position?.includes('top')
  const bottom = toast.position?.includes('bottom')

  const onClose = () => {
    if (toast.onClose) toast.onClose()
    toastRHT.dismiss(toast.id)
  }

  const toastStyle = {
    opacity: toast.visible ? 1 : 0,
    transform: `translate(${center ? '-50%' : '0'}, ${offset * (top ? 1 : -1)}px)`,
    ...POSITION_STYLE[toast.position],
  }

  return (
    <S.ToastWrapper
      isBottom={bottom}
      opacity={toastStyle.opacity}
      ref={ref}
      style={toastStyle}
      transform={toastStyle.transform}
      {...toast.ariaProps}
    >
      {cloneElement(toast.message as JSX.Element, { onClose })}
    </S.ToastWrapper>
  )
}
