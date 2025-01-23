import * as React from 'react'

import { VariantIcon } from '@/VariantIcon'

const Example = () => {
  return (
    <>
      <VariantIcon size="xs" variant="success" />
      <VariantIcon size="sm" variant="success" />
      <VariantIcon variant="success" />
      <VariantIcon size="lg" variant="success" />
      <VariantIcon size="xl" variant="success" />
      <VariantIcon size="xxl" variant="success" />
    </>
  )
}

export default Example
