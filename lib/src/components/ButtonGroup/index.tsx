import { createContext, useContext, useMemo } from 'react'

import { classNames } from '@/utils'
import { forwardRefWithAs } from '@/utils/forwardRefWithAs'

import buttonGroupStyles from './button-group.module.scss'
import type { ButtonGroupProps, ButtonGroupState } from './types'

const cx = classNames(buttonGroupStyles)

export const ButtonGroupContext = createContext<ButtonGroupState>({} as ButtonGroupState)

export function useButtonGroup() {
  return useContext(ButtonGroupContext)
}

export const ButtonGroup = forwardRefWithAs<ButtonGroupProps, 'div'>(
  (
    { as, children, className, disabled = false, size = 'md', variant = 'primary', ...rest },
    ref
  ) => {
    const state = useMemo(() => ({ disabled, size, variant }), [disabled, size, variant])

    const Element = as || 'div'

    return (
      <ButtonGroupContext.Provider value={state}>
        <Element {...rest} className={cx('root', className)} ref={ref}>
          {children}
        </Element>
      </ButtonGroupContext.Provider>
    )
  }
)

ButtonGroup.displayName = 'ButtonGroup'
