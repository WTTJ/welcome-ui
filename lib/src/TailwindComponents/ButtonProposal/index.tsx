import type { ComponentProps } from 'react'
import { forwardRef } from 'react'

import { classNames } from '../../classNames'

import buttonStyles from './button.module.scss'
import type { ButtonProps } from './types'

const cx = classNames(buttonStyles)

// TODO: use forwardRef from system to bring the polymorphism (as props)
export const ButtonProposal = forwardRef<HTMLButtonElement, ButtonProps & ComponentProps<'button'>>(
  (
    { children, className = '', shape = 'square', size = 'md', variant = 'primary', ...rest },
    ref
  ) => {
    return (
      <button
        {...rest}
        className={cx(
          'root',
          variant && `--${variant}`,
          shape && `--${shape}`,
          size && `--${size}`,
          className
        )}
        ref={ref}
        type="button"
      >
        {children || 'Test button tailwind'}
      </button>
    )
  }
)
ButtonProposal.displayName = 'ButtonProposal'
