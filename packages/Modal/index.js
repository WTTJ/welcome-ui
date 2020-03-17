import React from 'react'
import { Dialog, DialogBackdrop, DialogDisclosure, useDialogState } from 'reakit/Dialog'
import { Portal } from 'reakit/Portal'
import { bool, func, node, oneOf, string } from 'prop-types'

import * as S from './styles'
import { Close } from './Close'

export function useModalState(options) {
  return useDialogState(options)
}

export function Modal({
  ariaLabel,
  children,
  hide,
  hideOnClickOutside = true,
  onClose,
  closeElement: CloseElement = Close,
  size = 'lg',
  ...rest
}) {
  function closeModal() {
    if (onClose) onClose()
    hide()
  }

  return (
    <>
      <Portal>
        <DialogBackdrop {...rest}>
          <S.Backdrop hideOnClickOutside={hideOnClickOutside} />
        </DialogBackdrop>
      </Portal>
      <Dialog
        aria-label={ariaLabel}
        hide={closeModal}
        hideOnClickOutside={hideOnClickOutside}
        {...rest}
      >
        <S.Dialog size={size}>
          <CloseElement onClick={closeModal} size="sm" variant="secondary" />
          {children}
        </S.Dialog>
      </Dialog>
    </>
  )
}

Modal.Trigger = DialogDisclosure
Modal.Content = S.Content
Modal.Footer = S.Footer
Modal.Cover = S.Cover

Modal.propTypes = {
  ariaLabel: string.isRequired,
  children: node.isRequired,
  /** Replace the default close button */
  closeElement: node,
  /** hide from Reakit Dialog */
  hide: func,
  /**  hideOnClickOutside from Reakit Dialog, if true add a cursor pointer on the backdrpp */
  hideOnClickOutside: bool,
  /**  call an function when modal closed */
  onClose: func,
  /**  auto adapt on the width of child element */
  size: oneOf(['sm', 'md', 'lg', 'auto'])
}
