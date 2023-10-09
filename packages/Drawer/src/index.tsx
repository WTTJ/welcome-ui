import React from 'react'
import * as Ariakit from '@ariakit/react'
import { As, CreateWuiProps, forwardRef } from '@welcome-ui/system'

import { Close } from './Close'
import { Content } from './Content'
import { Footer } from './Footer'
import { Title } from './Title'
import * as S from './styles'

export type Placement = 'top' | 'right' | 'bottom' | 'left'
export type Size = 'sm' | 'md' | 'lg' | 'auto' | string

export interface DrawerOptions extends Ariakit.DialogOptions<'div'> {
  placement?: Placement
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
      size = 'lg',
      store,
      withBackdrop = false,
      withCloseButton = true,
      ...rest
    },
    ref
  ) => {
    return (
      <Ariakit.Dialog
        backdrop={
          withBackdrop ? <S.Backdrop hideOnInteractOutside={hideOnInteractOutside} /> : false
        }
        hideOnInteractOutside={hideOnInteractOutside}
        modal={withBackdrop}
        ref={ref}
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

type TriggerProps = { store: Ariakit.DialogStore; children: React.ReactNode; as?: As }

export const Trigger = forwardRef<'button', TriggerProps>(({ as, store, ...rest }, ref) => {
  return <Ariakit.DialogDisclosure as={as} ref={ref} store={store} {...rest} />
})

export const Drawer = Object.assign(DrawerComponent, {
  Trigger,
  Backdrop: DrawerBackdrop,
  Close,
  Title,
  Content,
  Footer,
})
