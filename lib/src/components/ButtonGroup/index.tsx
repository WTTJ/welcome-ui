import type { ButtonProps } from '@components/Button/types'
import React, { Children, cloneElement, forwardRef } from 'react'

import { classNames } from '@/utils'

import buttonGroupStyles from './button-group.module.scss'
import type { ButtonGroupProps, ChildrenProps } from './types'

const cx = classNames(buttonGroupStyles)

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  (
    { children, className = '', disabled = false, size = 'md', variant = 'primary', ...rest },
    ref
  ) => {
    function setGlobalProps(children: ChildrenProps) {
      return Children.toArray(children)
        .filter(Boolean)
        .map((child: React.ReactElement<ButtonProps<'button'>>) =>
          cloneElement(child, {
            ...child.props,
            disabled: disabled || child.props.disabled,
            size: size || child.props.size,
            variant: variant || child.props.variant,
          })
        )
    }

    return (
      <div {...rest} className={cx('root', className)} ref={ref}>
        {setGlobalProps(children)}
      </div>
    )
  }
)
