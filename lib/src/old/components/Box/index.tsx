import { x } from '@xstyled/styled-components'

import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

export type BoxProps = Omit<CreateWuiProps<'div'>, 'dataTestId'>

export const Box = forwardRef<'div', BoxProps>((props, ref) => {
  return <x.div ref={ref} {...props} />
})
