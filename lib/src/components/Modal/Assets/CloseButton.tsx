import type { ButtonProps } from '@/components/Button/types'
import { Window } from '@/components/Window'
import { classNames } from '@/utils'

import modalStyles from './assets.module.scss'
const cx = classNames(modalStyles)

export const CloseButton = ({ children, ...rest }: ButtonProps) => {
  return (
    <Window.Header.CloseButton className={cx('close-button')} {...rest}>
      {children}
    </Window.Header.CloseButton>
  )
}

CloseButton.displayName = 'AssetModal.Close'
