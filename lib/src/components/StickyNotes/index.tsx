import React, { forwardRef } from 'react'

import { CloseButton } from '@/components/CloseButton'
import { classNames } from '@/utils'

import { Button } from './components/Button'
import { Title } from './components/Title'
import styles from './sticky-notes.module.scss'
import type { StickyNotesProps, StickyNotesTitleProps } from './types'

const cx = classNames(styles)

const StickyNotesComponent = forwardRef<HTMLDivElement, StickyNotesProps>(
  ({ children, className, handleClose, shape = 'square', variant = 'brand' }, ref) => {
    const hasCloseButton = Boolean(handleClose)

    const cloneElements = () =>
      React.Children.map(children, child => {
        if (React.isValidElement<StickyNotesTitleProps>(child) && child.type === Title) {
          return React.cloneElement(child, {
            variant,
          })
        }

        return child
      })

    return (
      <div className={cx('root', `variant-${variant}`, `shape-${shape}`, className)} ref={ref}>
        {hasCloseButton ? (
          <CloseButton className={cx('close-button')} onClick={handleClose} size="sm" />
        ) : null}
        <div className={cx('content')}>{cloneElements()}</div>
      </div>
    )
  }
)

export const StickyNotes = Object.assign(StickyNotesComponent, {
  Button,
  Title,
})
