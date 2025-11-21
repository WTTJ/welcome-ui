import * as Ariakit from '@ariakit/react'

import { classNames } from '@/utils'

import popoverStyles from './popover.module.scss'
import type { UsePopover } from './usePopover'

type ArrowProps = {
  store: UsePopover
}
const cx = classNames(popoverStyles)

export const Arrow = ({ store }: ArrowProps) => {
  const currentPlacement = Ariakit.useStoreState(store, 'currentPlacement')

  const [parentPlacement] = currentPlacement.split('-')

  return (
    <Ariakit.PopoverArrow className={cx('arrow')} store={store}>
      <svg
        className={cx('arrow-item', parentPlacement && `placement-${parentPlacement}`)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 30L15 22L23 30H7Z" fill="currentColor" fillRule="nonzero" id="stroke" />
        <path d="M8 30L15 23L22 30H8Z" fill="currentColor" fillRule="nonzero" />
      </svg>
    </Ariakit.PopoverArrow>
  )
}

Arrow.displayName = 'Popover.Arrow'
