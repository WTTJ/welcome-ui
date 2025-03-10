import React from 'react'

import * as S from './styles'
import { Size } from './theme'

import { CreateWuiProps, forwardRef } from '@/System'

export type IconContent = {
  block?: string
  height?: number
  isFlag?: boolean
  stroked?: boolean
  viewBox?: string
  width?: number
}

export interface IconOptions {
  content?: IconContent
  name?: string
  onClick?: (event: React.MouseEvent<SVGSVGElement>) => void
  size?: Size
  title?: string
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
