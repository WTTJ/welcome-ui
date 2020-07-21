/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement } from 'react'
import { node, oneOf } from 'prop-types'
import { Stack } from '@welcome-ui/stack'
import { Button } from '@welcome-ui/button'

import * as S from './styles'
import { Title } from './Title'

export const Alert = ({ children, variant = 'error', ...rest }) => {
  const hasTitle = Children.toArray(children).some(child => child.type === Title)
  const buttonChild = Children.toArray(children).find(child => child.type === AlertButton)
  const content = Children.toArray(children)
    .filter(child => child.type !== AlertButton)
    .map(child => {
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

Alert.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  variant: oneOf(['success', 'error', 'warning', 'info'])
}

// We need this component to check its existence in <Alert> and to allow users to add Button in <Alert> content
const AlertButton = props => <Button size="sm" {...props} />

// Nested exports
Alert.Title = Title
Alert.Button = AlertButton
