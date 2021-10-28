import React from 'react'
import { bool, func, string } from 'prop-types'
import { EyeIcon } from '@welcome-ui/icons.eye'
import { HideIcon } from '@welcome-ui/icons.hide'
import { Button } from '@welcome-ui/button'

export function ToggleButton({ dataTestId, isHidden, onClick, title }) {
  return (
    <Button
      aria-controls="password"
      aria-expanded={`${!isHidden}`}
      dataTestId={dataTestId && `${dataTestId}-action`}
      onClick={onClick}
      shape="circle"
      size="xs"
      title={title}
      variant="quaternary"
    >
      {isHidden ? <EyeIcon /> : <HideIcon />}
    </Button>
  )
}

ToggleButton.propTypes = {
  isHidden: bool,
  onClick: func,
  title: string,
}
