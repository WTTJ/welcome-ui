import { Radio } from '@ariakit/react'
import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import { classNames } from '@/utils'

import styles from './radio-tab.module.scss'
import type { RadioTabsProps } from './types'

const cx = classNames(styles)

export const RadioTab = forwardRef<HTMLInputElement, RadioTabsProps>(
  ({ checked, className, dataTestId, disabled, id, label, onChange, value, ...rest }, ref) => {
    return (
      <Button
        as="label"
        className={cx('label', checked && 'checked', className)}
        data-testid={dataTestId}
        disabled={disabled}
        variant={checked ? 'primary' : null}
        {...rest}
      >
        <div className={cx('input')}>
          <Radio
            checked={checked}
            className={cx('input')}
            data-testid={dataTestId ? `${dataTestId}-input` : undefined}
            disabled={disabled}
            id={id}
            onChange={onChange}
            ref={ref}
            value={value}
          />
        </div>
        <div className={cx('content')}>{label}</div>
      </Button>
    )
  }
)

RadioTab.displayName = 'RadioTab'
