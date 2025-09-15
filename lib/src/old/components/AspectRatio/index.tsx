import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import * as S from './styles'

export interface AspectRatioOptions {
  ratio?: number
}

export type AspectRatioProps = CreateWuiProps<'div', AspectRatioOptions>

export const AspectRatio = forwardRef<'div', AspectRatioProps>(
  ({ ratio = 4 / 3, ...rest }, ref) => {
    return <S.AspectRatio ratio={ratio} ref={ref} {...rest} />
  }
)

AspectRatio.displayName = 'AspectRatio'
