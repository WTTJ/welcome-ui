import { forwardRef } from 'react'

import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { Icon } from '@/components/Icon'

import type { FloatingActionBarActionsProps } from './types'

export const Actions = forwardRef<HTMLDivElement, FloatingActionBarActionsProps>(
  (
    {
      children,
      className,
      dataTestId,
      dropdownClassName,
      placement = 'top-end',
      size = 'md',
      variant = 'secondary',
      ...rest
    }: FloatingActionBarActionsProps,
    ref
  ) => {
    const dropdownMenu = useDropdownMenu({ placement })

    return (
      <div ref={ref}>
        <DropdownMenu.Trigger
          as={Button}
          className={className}
          size={size}
          store={dropdownMenu}
          variant={variant}
        >
          <Icon name="ellipsis-v" />
        </DropdownMenu.Trigger>

        <DropdownMenu
          aria-label="More actions"
          className={dropdownClassName}
          data-testid={dataTestId ? `${dataTestId}-menu` : undefined}
          portal
          size={size}
          store={dropdownMenu}
          {...rest}
        >
          {children}
        </DropdownMenu>
      </div>
    )
  }
)

Actions.displayName = 'FloatingActionBar.Actions'
