import React from 'react'
import { HideIcon, ShowIcon } from '@welcome-ui/icons'
import { Button } from '@welcome-ui/button'
import { CreateWuiProps } from '@welcome-ui/system'

interface ToggleButtonOptions {
  isHidden: boolean
}

type ToggleButtonProps = CreateWuiProps<typeof Button, ToggleButtonOptions>

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  dataTestId,
  isHidden,
  onClick,
  title,
}) => {
  return (
    <Button
      aria-controls="password"
      aria-expanded={`${!isHidden}`}
      dataTestId={dataTestId && `${dataTestId}-action`}
      onClick={onClick}
      shape="circle"
      size="xs"
      title={title}
      variant="ghost"
    >
      {isHidden ? <ShowIcon /> : <HideIcon />}
    </Button>
  )
}
