/* eslint-disable react/no-multi-comp */
import { node, oneOf } from 'prop-types'
import React, { Children, cloneElement } from 'react'
import { Stack } from '@welcome-ui/stack'
import { Button } from '@welcome-ui/button'
import { VariantIcon } from '@welcome-ui/variant-icon'

import * as S from './styles'

const Alert = ({ children, variant = 'error', ...rest }) => {
  const hasTitle = Children.toArray(children).some(child => child.type === AlertTitle)
  const buttonChild = Children.toArray(children).find(child => child.type === AlertButton)
  const content = Children.toArray(children)
    .filter(child => child.type !== AlertButton)
    .map(child => {
      // Add variant to AlertTitle to show the correct icon
      if (child.type === AlertTitle) {
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

const AlertTitle = ({ children, icon, variant, ...rest }) => {
  return (
    <S.Title variant={variant} {...rest}>
      <VariantIcon icon={icon} mr="xs" variant={variant} />
      {children}
    </S.Title>
  )
}

AlertTitle.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  icon: node,
  variant: oneOf(['success', 'error', 'warning', 'info'])
}

Alert.Title = AlertTitle

// We need this component to check its existence in <Alert> and to allow uses to add Button in <Alert> content
const AlertButton = props => <Button size="sm" {...props} />

Alert.Button = AlertButton

export { Alert, AlertTitle, AlertButton }
