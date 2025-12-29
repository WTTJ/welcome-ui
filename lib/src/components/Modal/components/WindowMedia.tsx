import { forwardRef } from 'react'

import { Window } from '@/components/Window'
import type { MediaProps } from '@/components/Window/types'
import { classNames } from '@/utils'

import modalStyles from '../modal.module.scss'

const cx = classNames(modalStyles)

export const WindowMedia = forwardRef<HTMLDivElement, MediaProps>(({ className, ...rest }, ref) => {
  return <Window.Media className={cx('window-media', className)} ref={ref} {...rest} />
})

WindowMedia.displayName = 'Modal.WindowMedia'
