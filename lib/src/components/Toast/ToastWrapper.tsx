/* eslint-disable no-console */
import type { Toast, ToastPosition } from 'react-hot-toast/headless'

import React, { cloneElement } from 'react'
import toastRHT from 'react-hot-toast/headless'

import * as S from './styles'
import { POSITION_STYLE } from './utils'

type CustomToastOptions = {
  onClose?: () => void
}

type ToastWrapperProps = {
  calculateOffset: (
    toast: Toast,
    opts?: {
      defaultPosition?: ToastPosition
      gutter?: number
      reverseOrder?: boolean
    }
  ) => number
  toast: CustomToastOptions & Toast
  updateHeight: (toastId: string, height: number) => void
}

export const ToastWrapper: React.FC<ToastWrapperProps> = ({
  calculateOffset,
  toast,
  updateHeight,
}) => {
  if (typeof toast.message === 'string') {
    console.warn('You must pass a React component or a HTML element.')
    return null
  }

  const offset = calculateOffset(toast, { gutter: 0, reverseOrder: false })

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
    ...POSITION_STYLE[toast.position || 'top-center'],
  }

  return (
    <S.ToastWrapper
      isBottom={bottom || false}
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
