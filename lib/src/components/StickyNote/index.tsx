import { forwardRef } from 'react'

import { CloseButton } from '@/components/CloseButton'
import { classNames } from '@/utils'

import { Button } from './components/Button'
import { Title } from './components/Title'
import styles from './sticky-note.module.scss'
import type { StickyNoteProps } from './types'

const cx = classNames(styles)

const StickyNoteComponent = forwardRef<HTMLDivElement, StickyNoteProps>(
  ({ children, className, handleClose, shape = 'square', variant = 'brand' }, ref) => {
    const hasCloseButton = Boolean(handleClose)

    return (
      <div className={cx('root', `variant-${variant}`, `shape-${shape}`, className)} ref={ref}>
        {hasCloseButton ? (
          <CloseButton className={cx('close-button')} onClick={handleClose} size="sm" />
        ) : null}
        <div className={cx('content')}>{children}</div>
      </div>
    )
  }
)

StickyNoteComponent.displayName = 'StickyNote'

export const StickyNote = Object.assign(StickyNoteComponent, {
  Button,
  Title,
})
