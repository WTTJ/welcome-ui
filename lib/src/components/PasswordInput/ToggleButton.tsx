import React from 'react'

import { Button } from '@/components/Button'
import { HideIcon, ShowIcon } from '@/components/Icon'

export type ToggleButtonProps = React.ComponentPropsWithoutRef<typeof Button> & {
  isHidden: boolean
}

export const ToggleButton = ({ isHidden, onClick, title, ...rest }: ToggleButtonProps) => {
  return (
    <Button
      aria-controls="password"
      aria-expanded={!isHidden}
      onClick={onClick}
      shape="circle"
      size="xs"
      title={title}
      variant="ghost"
      {...rest}
    >
      {isHidden ? <ShowIcon /> : <HideIcon />}
    </Button>
  )
}
