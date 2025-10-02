import { forwardRef } from 'react'

import modalStyles from '@/components/Modal/modal.module.scss'
import type { BodyProps } from '@/components/Modal/types'
import { classNames } from '@/utils'

const cx = classNames(modalStyles)

export const Body = forwardRef<HTMLElement, BodyProps>((props, ref) => {
  return <section className={cx('body')} ref={ref} {...props} />
})
