import React, { Children, cloneElement } from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Button, ButtonProps, Size, Variant } from '@welcome-ui/button'

import * as S from './styles'

type ChildType = React.ReactElement<typeof Button> | null | undefined | boolean
type ChildrenProps = ChildType | ChildType[]

export interface ButtonGroupOptions {
  children: ChildrenProps
  /** Disable all your buttons components */
  disabled?: boolean
  size?: Size
  variant?: Variant
}

export type ButtonGroupProps = CreateWuiProps<'div', ButtonGroupOptions>

export const ButtonGroup = forwardRef<'div', ButtonGroupProps>(
  ({ children, dataTestId, disabled, size, variant }, ref) => {
    function setGlobalProps(children: ChildrenProps) {
      return Children.toArray(children)
        .filter(Boolean)
        .map((child: React.ReactElement<ButtonProps>) => {
          return cloneElement(child, {
            ...child.props,
            disabled: disabled || child.props.disabled,
            size: size || child.props.size,
            variant: variant || child.props.variant,
          })
        })
    }

    return (
      <S.ButtonGroup data-testid={dataTestId} ref={ref}>
        {setGlobalProps(children)}
      </S.ButtonGroup>
    )
  }
)
