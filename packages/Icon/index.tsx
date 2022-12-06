import React from 'react'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'

import * as S from './styles'

type IconContent = {
  width?: number
  height?: number
  block?: string
  stroked?: boolean
  isFlag?: boolean
  viewBox?: string
}

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | string

export interface IconOptions {
  content?: IconContent
  name?: string
  size?: Size
  title?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
}

export type IconProps = CreateWuiProps<typeof S.Icon, IconOptions>

export const Icon = forwardRef<'svg', IconProps>(
  ({ content, dataTestId, size = 'md', title, ...props }, ref) => {
    const className = props.className || ''
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
        className={`${className} wui-icon`}
      />
    )
  }
)

Icon.displayName = 'Icon'

export const StyledIcon = S.Icon
