/* eslint-disable react/no-multi-comp */
import React, { cloneElement } from 'react'
import { bool, func, node, oneOf } from 'prop-types'
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
export function DrawerBackdrop({ children, hideOnClickOutside = true, ...rest }) {
  if (children.type !== Drawer) {
    throw new Error('<Drawer.Backdrop /> children as to be <Drawer />.')
  }

  return (
    <DialogBackdrop {...rest} hideOnClickOutside={hideOnClickOutside}>
      {props => (
        <S.Backdrop isClickable={hideOnClickOutside} {...props}>
          {cloneElement(children, { hideOnClickOutside })}
        </S.Backdrop>
      )}
    </DialogBackdrop>
  )
}

DrawerBackdrop.propTypes /* remove-proptypes */ = {
  /** Has to be a <Drawer /> */
  children: node.isRequired,
  /** Used to show the correct cursor on the backdrop, will be passed down to Drawer */
  hideOnClickOutside: bool.isRequired
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
