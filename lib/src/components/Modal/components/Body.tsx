import { forwardRef } from 'react'

import modalStyles from '@/components/Modal/modal.module.scss'
import type { BodyProps } from '@/components/Modal/types'
import { classNames } from '@/utils'

const cx = classNames(modalStyles)

export const Body = forwardRef<HTMLElement, BodyProps>(({ className, ...rest }, ref) => {
  return <section className={cx('body', className)} ref={ref} {...rest} />
})
