import React, { ForwardedRef, useEffect, useRef } from 'react'
import * as Ariakit from '@ariakit/react'

import { Close } from './Close'
import { Content } from './Content'
import { Footer } from './Footer'
import { Title } from './Title'
import * as S from './styles'
import { AssetDrawerComponent } from './AssetDrawer'
import { Header } from './AssetDrawer/Header'

import { As, CreateWuiProps, forwardRef } from '@/System'

type Placement = 'top' | 'right' | 'bottom' | 'left'
type Size = 'sm' | 'md' | 'lg' | 'auto' | string

export interface DrawerOptions extends Ariakit.DialogOptions<'div'> {
  placement?: Placement
  scrollToTopOnOpen?: boolean
  size?: Size
  withBackdrop?: boolean
  withCloseButton?: boolean
}

export type DrawerProps = CreateWuiProps<'div', DrawerOptions>

const DrawerComponent = forwardRef<'div', DrawerProps>(
  (
    {
      children,
      hideOnInteractOutside = true,
      placement = 'right',
      scrollToTopOnOpen = true,
      size = 'lg',
      store,
      withBackdrop = false,
      withCloseButton = true,
      ...rest
    },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const drawerRef = useRef<HTMLDivElement>(null)
    const isDrawerOpen = Ariakit.useStoreState(store, 'open')

    useEffect(() => {
      const currentRef = ref && typeof ref === 'object' ? ref.current : drawerRef.current

      if (scrollToTopOnOpen && isDrawerOpen) {
        currentRef?.scrollTo({
          top: 0,
        })
      }
    })

    return (
      <Ariakit.Dialog
        backdrop={
          withBackdrop ? <S.Backdrop hideOnInteractOutside={hideOnInteractOutside} /> : false
        }
        hideOnInteractOutside={hideOnInteractOutside}
        modal={withBackdrop}
        ref={ref || drawerRef}
        render={<S.Drawer placement={placement} size={size} />}
        store={store}
        {...(rest as Ariakit.DialogProps<'div'>)}
      >
        <>
          {withCloseButton && <Close />}
          {children}
        </>
      </Ariakit.Dialog>
    )
  }
)

export type UseDrawer = Ariakit.DialogStore
export type UseDrawerProps = Ariakit.DialogStoreProps
export type UseDrawerState = Ariakit.DialogStoreState

export function useDrawer(options: UseDrawerProps = {}): UseDrawer {
  const dialog = Ariakit.useDialogStore({ animated: true, ...options })

  return dialog
}

export interface DrawerBackdropOptions {
  hideOnInteractOutside?: boolean
}

/**
 * @name Drawer.Backdrop
 */
export const DrawerBackdrop: React.FC<DrawerBackdropOptions> = ({
  hideOnInteractOutside = true,
  ...props
}) => {
  return <S.Backdrop hideOnInteractOutside={hideOnInteractOutside} {...props} />
}

type TriggerProps = { as?: As; children: React.ReactNode; store: Ariakit.DialogStore }

export const Trigger = forwardRef<'button', TriggerProps>(({ as: As, store, ...rest }, ref) => {
  return (
    <Ariakit.DialogDisclosure
      ref={ref}
      render={As ? props => <As {...props} /> : undefined}
      store={store}
      {...rest}
    />
  )
})

export const Drawer = Object.assign(DrawerComponent, {
  Trigger,
  Backdrop: DrawerBackdrop,
  Close,
  Title,
  Content,
  Footer,
})

export const AssetDrawer = Object.assign(AssetDrawerComponent, { Trigger, Header })
