import React, { forwardRef } from 'react'
import { WuiProps } from '@welcome-ui/system'

import * as S from './styles'

type IconContent = {
  width?: number
  height?: number
  block?: string
  stroked?: boolean
  isFlag?: boolean
  viewBox?: string
}

type Size = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | number | string

export interface IconOptions {
  content?: IconContent
  name?: string
  size?: Size
  title?: string
}

export type IconProps = IconOptions & WuiProps

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ content, dataTestId, size = 'md', title, ...props }, ref) => {
    if (!content) {
      return null
    }

    return (
      <S.Icon
        alt={title}
        dangerouslySetInnerHTML={{ __html: content.block }}
        data-testid={dataTestId && `icon-${dataTestId}`}
        isFlag={content.isFlag}
        ref={ref}
        role="img"
        size={size}
        stroked={content.stroked}
        title={title}
        viewBox={content.viewBox || '0 0 100 100'}
        {...props}
      />
    )
  }
)

Icon.displayName = 'Icon'

export const StyledIcon = S.Icon
