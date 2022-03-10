import React, { Children, cloneElement } from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { Button, ButtonProps, Size, Variant } from '@welcome-ui/button'

import * as S from './styles'

type ChildrenProps = React.ReactElement<typeof Button> | React.ReactElement<typeof Button>[]

export interface GroupOptions {
  children: ChildrenProps
  /** Disable all your buttons components */
  disabled?: boolean
  size?: Size
  variant?: Variant
}

export type GroupProps = CreateWuiProps<'div', GroupOptions>

export const Group = forwardRef<'div', GroupProps>(
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
      <S.Group data-testid={dataTestId} ref={ref}>
        {setGlobalProps(children)}
      </S.Group>
    )
  }
)
