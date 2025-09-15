import * as Ariakit from '@ariakit/react'

import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './Separator.styled'

export type SeparatorProps = CreateWuiProps<'div', Ariakit.MenuSeparatorProps>

export const Separator = forwardRef<'div', SeparatorProps>((props, ref) => {
  return <Ariakit.MenuSeparator ref={ref} render={<S.Separator />} {...props} />
})
