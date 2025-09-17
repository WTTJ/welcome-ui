import { createContext, forwardRef, useContext, useMemo } from 'react'

import { classNames } from '@/utils'

import buttonGroupStyles from './button-group.module.scss'
import type { ButtonGroupProps, ButtonGroupState } from './types'

const cx = classNames(buttonGroupStyles)

export const ButtonGroupContext = createContext<ButtonGroupState>({} as ButtonGroupState)

export function useButtonGroup() {
  return useContext(ButtonGroupContext)
}

export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, className, disabled = false, size = 'md', variant = 'primary', ...rest }, ref) => {
    const state = useMemo(() => ({ disabled, size, variant }), [disabled, size, variant])

    return (
      <ButtonGroupContext.Provider value={state}>
        <div {...rest} className={cx('root', className)} ref={ref}>
          {children}
        </div>
      </ButtonGroupContext.Provider>
    )
  }
)
