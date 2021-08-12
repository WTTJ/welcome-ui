import React, { Children, cloneElement } from 'react'
import { WuiProps } from '@welcome-ui/system'
import { Button, ButtonProps, Size, Variant } from '@welcome-ui/button'

import * as S from './styles'

type ChildrenProps = React.ReactElement<typeof Button> | React.ReactElement<typeof Button>[]

export interface GroupOptions {
  children: ChildrenProps
  disabled?: boolean
  size?: Size
  variant?: Variant
}

export type GroupProps = GroupOptions & WuiProps

export const Group: React.FC<GroupProps> = ({ children, dataTestId, disabled, size, variant }) => {
  function setGlobalProps(children: ChildrenProps) {
    return Children.toArray(children)
      .filter(Boolean)
      .map((child: React.ReactElement<ButtonProps>) => {
        return cloneElement(child, {
          ...child.props,
          disabled: disabled || child.props.disabled,
          size: size || child.props.size,
          variant: variant || child.props.variant
        })
      })
  }

  return <S.Group data-testid={dataTestId}>{setGlobalProps(children)}</S.Group>
}
