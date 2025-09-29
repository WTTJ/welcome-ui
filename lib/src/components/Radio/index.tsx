import { Radio as AriakitRadio } from '@ariakit/react'
import { forwardRef } from 'react'

import { Hint } from '@/components/Hint'
import { Label } from '@/components/Label'
import { classNames } from '@/utils'

import radioStyles from './radio.module.scss'
import type { RadioProps } from './types'

const cx = classNames(radioStyles)

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      dataTestId,
      disabled,
      hint,
      label,
      onChange,
      onClick,
      value,
      variant = 'default',
      ...rest
    },
    ref
  ) => {
    const handleClick = (event: React.MouseEvent<HTMLLabelElement>) => {
      event.stopPropagation()
      if (onClick) onClick(event)
      if (onChange) onChange(event)
    }

    return (
      <Label className={cx('root', className)} onClick={handleClick}>
        <div className={cx('input-wrapper')}>
          <AriakitRadio
            aria-label={label}
            className={cx('input', `variant-${variant}`)}
            data-testid={dataTestId}
            disabled={disabled}
            ref={ref}
            value={value}
            {...rest}
          />
        </div>
        <div className={cx('label-with-hint')}>
          <div data-testid={dataTestId ? `${dataTestId}-label` : undefined}>{label}</div>
          {hint ? (
            <Hint
              className={cx('hint')}
              data-testid={dataTestId ? `${dataTestId}-hint` : undefined}
            >
              {hint}
            </Hint>
          ) : null}
        </div>
      </Label>
    )
  }
)

Radio.displayName = 'Radio'
