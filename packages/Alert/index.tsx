/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement } from 'react'
import { Stack } from '@welcome-ui/stack'
import { Button, ButtonProps } from '@welcome-ui/button'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'
import { Title } from './Title'

export type Variant = 'error' | 'warning' | 'info' | 'success'

export interface AlertOptions {
  variant?: Variant
}

export type AlertProps = AlertOptions & WuiProps

const AlertComponent: React.FC<AlertProps> = ({ children, variant = 'error', ...rest }) => {
  const hasTitle = Children.toArray(children).some(
    (child: React.ReactElement) => child.type === Title
  )
  const buttonChild = Children.toArray(children).find(
    (child: React.ReactElement) => child.type === AlertButton
  )
  const content = Children.toArray(children)
    .filter((child: React.ReactElement) => child.type !== AlertButton)
    .map((child: React.ReactElement) => {
      // Add variant to Title to show the correct icon
      if (child.type === Title) {
        return cloneElement(child, { variant })
      }
      return child
    })

  // Reduce the vertical padding only when we have Title & Button
  const py = hasTitle && buttonChild && content.length === 1 ? 'sm' : 'xl'

  return (
    <S.Alert py={py} variant={variant} {...rest}>
      {buttonChild ? (
        <Stack alignItems="center" direction="row" justifyContent="space-between">
          <div>{content}</div>
          {buttonChild}
        </Stack>
      ) : (
        content
      )}
    </S.Alert>
  )
}

export type AlertButtonProps = ButtonProps

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton: React.FC<AlertButtonProps> = props => <Button size="sm" {...props} />

export const Alert = Object.assign(AlertComponent, { Title, Button: AlertButton })
