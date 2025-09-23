import * as Ariakit from '@ariakit/react'
import { forwardRef } from 'react'

import { classNames } from '@/utils'

import dropdownMenuStyles from './dropdown-menu.module.scss'

const cx = classNames(dropdownMenuStyles)

const transformMap: Record<string, string> = {
  bottom: 'rotateZ(360deg)',
  left: 'rotateZ(90deg)',
  right: 'rotateZ(-90deg)',
  top: 'rotateZ(180deg)',
}

export type ArrowProps = Ariakit.MenuArrowProps

export const Arrow = forwardRef<HTMLDivElement, ArrowProps>(({ className, store }, ref) => {
  const currentPlacement = Ariakit.useStoreState(store, 'currentPlacement')
  const [placement] = currentPlacement.split('-')

  return (
    <Ariakit.MenuArrow ref={ref} render={<div className={cx('arrow', className)} />}>
      <svg
        className={cx('arrow-item')}
        style={{ '--dropdown-menu-transform': transformMap[placement] } as React.CSSProperties}
        viewBox="0 0 30 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 30L15 22L23 30H7Z" fill="currentColor" fillRule="nonzero" id="stroke" />
        <path d="M8 30L15 23L22 30H8Z" fill="currentColor" fillRule="nonzero" />
      </svg>
    </Ariakit.MenuArrow>
  )
})
