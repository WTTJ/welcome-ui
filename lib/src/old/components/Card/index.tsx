import type { CreateWuiProps } from '@old/System'
import { forwardRef } from '@old/System'

import { Cover } from './Cover'
import * as S from './styles'

export type CardProps = CreateWuiProps<'div'>

export const CardComponent = forwardRef<'div', CardProps>(({ children, ...rest }, ref) => {
  return (
    <S.Card ref={ref} {...rest}>
      {children}
    </S.Card>
  )
})

export const Card = Object.assign(CardComponent, {
  Body: S.Body,
  Cover,
})
