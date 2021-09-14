/* eslint-disable react/no-multi-comp */
import React from 'react'
import { DialogDisclosure, useDialogState } from 'reakit/Dialog'
import { bool, func, node, oneOf, string } from 'prop-types'
import { Text } from '@welcome-ui/text'

import * as S from './styles'
import { Close } from './Close'

export function useModalState(options) {
  return useDialogState({ animated: true, ...options })
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
    <S.Backdrop {...rest} hideOnClickOutside={hideOnClickOutside}>
      <S.Dialog
        aria-label={ariaLabel}
        hide={closeModal}
        hideOnClickOutside={hideOnClickOutside}
        size={size}
        {...rest}
      >
        <CloseElement onClick={closeModal} />
        {children}
      </S.Dialog>
    </S.Backdrop>
  )
}

Modal.displayName = 'Modal'

Modal.propTypes /* remove-proptypes */ = {
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

function Title(props) {
  return <S.Title as={Text} m="0" variant="h4" {...props} />
}

// Nested exports
Modal.Trigger = DialogDisclosure
Modal.Content = S.Content
Modal.Title = Title
Modal.Footer = S.Footer
Modal.Cover = S.Cover
