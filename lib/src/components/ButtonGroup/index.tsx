import type { ReactElement } from 'react'
import React, { Children, cloneElement } from 'react'

import type { Button, ButtonProps } from '@/Button'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'

export interface ButtonGroupOptions {
  children: ChildrenProps
  /** Disable all your buttons components */
  disabled?: boolean
  size?: ButtonProps['size']
  variant?: ButtonProps['variant']
}
export type ButtonGroupProps = CreateWuiProps<'div', ButtonGroupOptions>

type ChildrenProps = ChildType | ChildType[]

type ChildType = boolean | null | ReactElement<typeof Button> | undefined

export const ButtonGroup = forwardRef<'div', ButtonGroupProps>(
  ({ children, dataTestId, disabled, size, variant }, ref) => {
    function setGlobalProps(children: ChildrenProps) {
      return Children.toArray(children)
        .filter(Boolean)
        .map(child => {
          if (React.isValidElement<ButtonProps>(child)) {
            return cloneElement(child, {
              ...child.props,
              disabled: disabled || child.props.disabled,
              size: size || child.props.size,
              variant: variant || child.props.variant,
            })
          }
          return child
        })
    }

    return (
      <S.ButtonGroup data-testid={dataTestId} ref={ref}>
        {setGlobalProps(children)}
      </S.ButtonGroup>
    )
  }
)
