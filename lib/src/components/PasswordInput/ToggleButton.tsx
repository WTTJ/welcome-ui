import React from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'

export type ToggleButtonProps = React.ComponentPropsWithoutRef<typeof Button> & {
  isHidden: boolean
}

export const ToggleButton = ({ isHidden, onClick, ...rest }: ToggleButtonProps) => {
  return (
    <Button
      aria-controls="password"
      aria-expanded={!isHidden}
      onClick={onClick}
      shape="circle"
      size="xs"
      variant="ghost"
      {...rest}
    >
      {isHidden ? <Icon name="eye" /> : <Icon name="eye-slash" />}
    </Button>
  )
}
