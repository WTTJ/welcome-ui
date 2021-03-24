/* eslint-disable react/no-multi-comp */
import React from 'react'
import { func, node, oneOf } from 'prop-types'
import { Dialog, DialogBackdrop, DialogDisclosure, useDialogState } from 'reakit/Dialog'

import * as S from './styles'

export function Drawer({ children, placement = 'right', size = 'lg', ...rest }) {
  return (
    // Needed to allow to style the backdrop
    // see: https://reakit.io/docs/styling/#css-in-js
    <Dialog {...rest}>
      {props => (
        <S.Drawer {...props} placement={placement} size={size}>
          {children}
        </S.Drawer>
      )}
    </Dialog>
  )
}

Drawer.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  placement: oneOf(['top', 'right', 'bottom', 'left']).isRequired,
  size: oneOf(['sm', 'md', 'lg', 'auto'])
}

export function useDrawerState(options) {
  return useDialogState({ animated: true, ...options })
}

// Needed to allow to style the backdrop
// see: https://reakit.io/docs/styling/#css-in-js
export function DrawerBackdrop({ children, ...rest }) {
  return (
    <DialogBackdrop {...rest}>
      {props => <S.Backdrop {...props}>{children}</S.Backdrop>}
    </DialogBackdrop>
  )
}

DrawerBackdrop.propTypes = {
  children: node.isRequired
}

export function DrawerClose({ hide, ...rest }) {
  return <S.Close onClick={hide} {...rest} />
}

DrawerClose.propTypes = {
  hide: func.isRequired
}

Drawer.Trigger = DialogDisclosure
Drawer.Backdrop = DrawerBackdrop
Drawer.Close = DrawerClose
Drawer.Title = S.Title
Drawer.Content = S.Content
Drawer.Footer = S.Footer
