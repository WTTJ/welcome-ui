/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement } from 'react'
import { Stack } from '@welcome-ui/stack'
import { Button, ButtonProps } from '@welcome-ui/button'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'
import { Title } from './Title'

export type Variant = 'error' | 'warning' | 'info' | 'success'
export type AlertOptions = { variant?: Variant }
export type AlertProps = CreateWuiProps<'div', AlertOptions>

const AlertComponent = forwardRef<'div', AlertProps>(
  ({ children, variant = 'error', ...rest }, ref) => {
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
      <S.Alert $py={py} ref={ref} variant={variant} {...rest}>
        {buttonChild ? (
          <Stack $alignItems="center" $flexDirection="row" $justifyContent="space-between">
            <div>{content}</div>
            {buttonChild}
          </Stack>
        ) : (
          content
        )}
      </S.Alert>
    )
  }
)

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton: React.FC<ButtonProps> = props => <Button size="sm" {...props} />

export const Alert = Object.assign(AlertComponent, { Title, Button: AlertButton })
