import React, { cloneElement } from 'react'
import toastRHT from 'react-hot-toast/headless'

import { classNames } from '@/utils'

import toastStyles from '../toast.module.scss'
import type { ToastWrapperProps } from '../types'

const POSITION_STYLE = {
  'bottom-center': { bottom: 0, left: '50%' },
  'bottom-left': { bottom: 0, left: 0 },
  'bottom-right': { bottom: 0, right: 0 },
  'top-center': { left: '50%', top: 0 },
  'top-left': { left: 0, top: 0 },
  'top-right': { right: 0, top: 0 },
}

const cx = classNames(toastStyles)

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
    ...POSITION_STYLE[toast.position],
  }

  return (
    <div
      className={cx('toast-wrapper', bottom ? 'bottom' : 'top')}
      ref={ref}
      style={toastStyle}
      {...toast.ariaProps}
    >
      {cloneElement(toast.message as JSX.Element, { onClose })}
    </div>
  )
}
