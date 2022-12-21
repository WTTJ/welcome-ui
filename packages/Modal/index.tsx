import React, { Children, cloneElement, useEffect, useMemo, useRef } from 'react'
import { DialogState, DialogStateProps, useDialogState } from 'ariakit/dialog'
import { BoxProps } from '@welcome-ui/box'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { useTheme } from '@xstyled/styled-components'
import { Shape, ShapeProps } from '@welcome-ui/shape'

import * as S from './styles'
import { Close } from './Close'
import { Header } from './Header'
import { Footer } from './Footer'

export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'auto'

export interface ModalOptions {
  ariaLabel: string
  closeElement?: React.ElementType
  hideOnClickOutside?: boolean
  onClose?: () => void
  size?: Size
  children: JSX.Element | JSX.Element[]
  state: DialogState
}

export type ModalProps = CreateWuiProps<'div', ModalOptions>
export type ModalInitialState = DialogStateProps
export type ModalStateReturn = DialogState

export function useModalState(options?: ModalInitialState): ModalStateReturn {
  return useDialogState({ animated: true, ...options })
}

const ModalComponent = forwardRef<'div', ModalProps>(
  (
    {
      ariaLabel,
      children,
      hideOnClickOutside = true,
      onClose,
      closeElement: CloseElement = Close,
      size = 'lg',
      tabIndex,
      dataTestId,
      state,
    },
    ref
  ) => {
    const { borderWidths, space } = useTheme()
    const headerRef = useRef(null)
    const contentRef = useRef(null)
    const footerRef = useRef(null)
    const headerHeight = headerRef?.current?.clientHeight
    const footerHeight = footerRef?.current?.clientHeight
    const contentHeight = contentRef?.current?.clientHeight
    const contentScrollHeight = contentRef?.current?.scrollHeight

    const components = useMemo(
      () => Children.map(children, child => child?.type?.displayName || child?.type?.name),
      [children]
    )

    const setRef = (name?: string) => {
      if (name === 'Header') {
        return headerRef
      }

      if (name === 'Content') {
        return contentRef
      }

      if (name === 'Footer') {
        return footerRef
      }

      return undefined
    }

    const getStyles = (name?: string) => {
      if (name === 'Header') {
        return {
          pb: components.includes('Content') || components.includes('Footer') ? space.lg : null,
        }
      }
      if (name === 'Content') {
        return {
          mt: { xs: headerHeight, md: 0 },
          mb: { xs: footerHeight, md: 0 },
          pb: components.includes('Footer') ? space.lg : null,
          pr: components.includes('Header') ? space.xxl : null,
          pt: components.includes('Header') ? 0 : null,
        }
      }

      if (name === 'Footer') {
        return {
          pt: components.includes('Header') || components.includes('Content') ? null : space.lg,
          borderWidth: contentScrollHeight > contentHeight ? borderWidths.sm : '0',
        }
      }

      return {}
    }

    const handleClose = () => {
      onClose?.()
      state.hide()
    }

    useEffect(() => {
      if (state.open === false) {
        onClose?.()
      }
    }, [onClose, state.open])

    return (
      <S.Dialog
        aria-label={ariaLabel}
        backdrop={S.Backdrop}
        backdropProps={{
          // TODO: check typescript when ariakit is not in alpha
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          hideOnClickOutside,
        }}
        data-testid={dataTestId}
        hideOnEscape={hideOnClickOutside}
        hideOnInteractOutside={hideOnClickOutside}
        ref={ref}
        size={size}
        state={state}
        tabIndex={tabIndex}
      >
        <CloseElement onClick={handleClose} />
        {Children.map(children, (child: JSX.Element) => {
          if (!child) return null
          const name = child?.type?.displayName || child?.type?.name

          return cloneElement(child, {
            ref: setRef(name),
            ...getStyles(name),
            ...child.props,
          })
        })}
      </S.Dialog>
    )
  }
)

const Content = forwardRef<'div', BoxProps>((props, ref) => {
  return <S.Content flex="1" overflowY={{ md: 'auto' }} ref={ref} {...props} />
})

Content.displayName = 'Content'

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
  Header,
  Content,
  Footer,
  Cover,
})
