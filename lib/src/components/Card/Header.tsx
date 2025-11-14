import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { classNames } from '@/utils'

import cardStyles from './card.module.scss'
import type { HeaderProps } from './types'

const cx = classNames(cardStyles)

/**
 * @name Card.Header
 */
export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ children, className, disabled, onClose, ...rest }, ref) => {
    return (
      <div className={cx('header', className)} ref={ref} {...rest}>
        {children}

        {onClose ? (
          <Button
            accessibleWhenDisabled={false}
            aria-label="Close"
            className={cx('close')}
            disabled={disabled}
            onClick={() => onClose()}
            size="sm"
            variant="tertiary"
          >
            <Icon name="times" />
          </Button>
        ) : null}
      </div>
    )
  }
)

Header.displayName = 'Card.Header'
