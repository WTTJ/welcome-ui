// Faire un store commun avec :
// - is expanded
// - is closed
// - active tab

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import { Header } from './components/Header'
import type { WindowProps } from './types'
import windowStyles from './window.module.scss'

const cx = classNames(windowStyles)

// export function useModal(options?: UseModalProps): UseModal {
//   const { onClose, setOpen, ...storeOptions } = options || {}

//   const dialog = useDialogStore({
//     setOpen: open => {
//       if (!open && onClose) {
//         onClose()
//       }
//       setOpen?.(open)
//     },
//     ...storeOptions,
//   })

//   return dialog
// }

const WindowComponent = forwardRefWithAs<WindowProps, 'div'>(({ children, className }) => {
  return <div className={cx('root', className)}>{children}</div>
})

WindowComponent.displayName = 'Window'

// Nested exports
export const Window = Object.assign(WindowComponent, {
  Header,
})
