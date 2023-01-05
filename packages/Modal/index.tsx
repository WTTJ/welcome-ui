/* eslint-disable react/no-multi-comp */
import React, { Children, cloneElement, useMemo, useRef } from 'react'
import {
  DialogDisclosure,
  DialogInitialState,
  DialogStateReturn,
  useDialogState,
} from 'reakit/Dialog'
import { DisclosureActions } from 'reakit/Disclosure'
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
  hide?: DisclosureActions['hide']
  hideOnClickOutside?: boolean
  onClose?: () => void
  size?: Size
  children: JSX.Element | JSX.Element[]
}

export type ModalProps = CreateWuiProps<'div', ModalOptions>
export type ModalInitialState = DialogInitialState
export type ModalStateReturn = DialogStateReturn

export function useModalState(options?: ModalInitialState): ModalStateReturn {
  return useDialogState({ animated: true, ...options })
}

const ModalComponent = forwardRef<'div', ModalProps>(
  (
    {
      ariaLabel,
      children,
      hide,
      hideOnClickOutside = true,
      onClose,
      closeElement: CloseElement = Close,
      size = 'lg',
      tabIndex,
      dataTestId,
      ...rest
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
      () =>
        Children.map(children, child => {
          if (child.type === React.Fragment) {
            return Children.map(
              child.props.children,
              _child => _child?.type?.displayName ?? _child?.type?.name
            )
          }
          return child?.type?.displayName ?? child?.type?.name
        }),
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

    const closeModal = () => {
      onClose?.()
      hide()
    }

    return (
      <S.Backdrop {...rest} hideOnClickOutside={hideOnClickOutside}>
        <S.Dialog
          aria-label={ariaLabel}
          data-testid={dataTestId}
          hide={closeModal}
          hideOnClickOutside={hideOnClickOutside}
          ref={ref}
          size={size}
          tabIndex={tabIndex}
          {...rest}
        >
          <CloseElement onClick={closeModal} />
          {Children.map(children, (child: JSX.Element) => {
            if (!child) return null
            if (child.type === React.Fragment) {
              return Children.map(child.props.children, _child => {
                const name = _child?.type?.displayName || _child?.type?.name

                return cloneElement(_child, {
                  ref: setRef(name),
                  ...getStyles(name),
                  ..._child.props,
                })
              })
            }

            const name = child?.type?.displayName || child?.type?.name

            return cloneElement(child, {
              ref: setRef(name),
              ...getStyles(name),
              ...child.props,
            })
          })}
        </S.Dialog>
      </S.Backdrop>
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
  Trigger: DialogDisclosure,
  Header,
  Content,
  Footer,
  Cover,
})
