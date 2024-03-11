import React from 'react'
import * as Ariakit from '@ariakit/react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './Separator.styled'

export type SeparatorProps = CreateWuiProps<'div', Ariakit.MenuSeparatorProps>

export const Separator = forwardRef<'div', SeparatorProps>((props, ref) => {
  return <Ariakit.MenuSeparator ref={ref} render={<S.Separator />} {...props} />
})
