import React, { forwardRef } from 'react'
import { func, node } from 'prop-types'
import { CrossIcon } from '@welcome-ui/icons.cross'

import * as S from './styles'
import { GrowlTitle } from './title'

export const Growl = forwardRef(({ children, close, dataTestId, onClose }, ref) => (
  <S.Growl ref={ref}>
    {onClose && (
      <S.Close data-testid={dataTestId} onClick={onClose}>
        {close || (
          <S.CloseContent>
            <CrossIcon size="xs" />
          </S.CloseContent>
        )}
      </S.Close>
    )}
    {children}
  </S.Growl>
))

Growl.displayName = 'Growl'

Growl.propTypes /* remove-proptypes */ = {
  children: node.isRequired,
  close: node,
  onClose: func
}

Growl.Action = S.Action
Growl.Close = S.CloseContent
Growl.Title = GrowlTitle

export const GrowlAction = S.Action
export const GrowlClose = S.CloseContent
export { GrowlTitle } from './title'
