import React, { useCallback, useMemo } from 'react'
import {
  DialogDisclosure,
  DialogInitialState,
  DialogStateReturn,
  useDialogState,
} from 'reakit/Dialog'
import { BoxProps } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'
import { Shape, ShapeProps } from '@welcome-ui/shape'

import * as S from './styles'
import { Close } from './Close'
import { Header } from './Header'
import { Footer } from './Footer'
import { Content } from './Content'
import { ModalProvider } from './context'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'auto'

export interface ModalOptions {
  ariaLabel: string
  closeElement?: React.ElementType
  hideOnClickOutside?: boolean
  onClose?: () => void
  size?: Size
  state: ModalStateReturn
  children: React.ReactElement
}

export type ModalProps = CreateWuiProps<'div', ModalOptions>
export type ModalStateReturn = DialogStateReturn & {
  open: DialogStateReturn['visible']
}
export type ModalInitialState = DialogInitialState & {
  /**
   * @deprecated
   * will be replace by open on ariakit (reakit v2)
   **/
  visible?: DialogInitialState['visible']
  /**
   * Open the drawer on load
   */
  open?: DialogInitialState['visible']
}

export function useModalState(options?: ModalInitialState): ModalStateReturn {
  const { open, visible, ...restOptions } = options || {}
  const dialogState = useDialogState({ animated: true, visible: visible || open, ...restOptions })

  return { open: dialogState.visible, ...dialogState }
}

const ModalComponent = forwardRef<'div', ModalProps>(
  (
    {
      ariaLabel,
      hideOnClickOutside = true,
      onClose,
      closeElement: CloseElement = Close,
      size = 'lg',
      children,
      state,
      ...rest
    },
    ref
  ) => {
    const prevHide = useMemo(() => state.hide, [state])

    state.hide = useCallback(() => {
      onClose?.()
      prevHide()
    }, [prevHide, onClose])

    return (
      <ModalProvider state={state}>
        <S.Backdrop {...state} hideOnClickOutside={hideOnClickOutside}>
          <S.Dialog
            aria-label={ariaLabel}
            hideOnClickOutside={hideOnClickOutside}
            preventBodyScroll={false}
            ref={ref}
            size={size}
            {...state}
            {...rest}
          >
            <CloseElement onClick={() => state.hide()} />
            {children}
          </S.Dialog>
        </S.Backdrop>
      </ModalProvider>
    )
  }
)

const Body = forwardRef<'div', BoxProps>((props, ref) => {
  return <S.Body ref={ref} {...props} />
})

Body.displayName = 'Body'

const Cover: React.FC<ShapeProps> = props => {
  const { modals } = useTheme()

  return (
    <div>
      <Shape {...modals.cover} {...props} />
    </div>
  )
}

// Nested exports
export const Modal = Object.assign(ModalComponent, {
  Trigger: DialogDisclosure,
  Content,
  Header,
  Body,
  Footer,
  Cover,
})
