import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { Icon } from '@/components/Icon'

import type { FloatingActionBarActionsProps } from './types'

export const Actions = ({
  children,
  className,
  dataTestId,
  dropdownClassName,
  placement = 'top-end',
  size = 'md',
  variant = 'secondary',
  ...props
}: FloatingActionBarActionsProps) => {
  const dropdownMenu = useDropdownMenu({ placement })

  return (
    <>
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
        data-testid={dataTestId ? `${dataTestId}-menu` : undefined}
        {...props}
        aria-label="More actions"
        className={dropdownClassName}
        portal
        size={size}
        store={dropdownMenu}
      >
        {children}
      </DropdownMenu>
    </>
  )
}

Actions.displayName = 'FloatingActionBar.Actions'
