
import { Button } from '@welcome-ui/button'
import React from 'react'

export function CopyButton({ copied, copy }) {
  return (
    <Button
      mr="sm"
      mt="lg"
      onClick={copy}
      position="absolute"
      right={0}
      size="xs"
      top={0}
      variant={copied ? 'quaternary' : 'tertiary-negative'}
    >
      {copied ? 'Copied!' : 'Copy'}
    </Button>
  )
}
