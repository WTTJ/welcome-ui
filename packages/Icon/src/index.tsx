import React from 'react'
import { CreateWuiPandaProps, CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { RecipeVariantProps } from '@welcome-ui/panda/css'

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

export type IconPandaVariants = RecipeVariantProps<typeof S.iconStyles>
export type IconPandaOptions = Omit<IconOptions, keyof IconPandaVariants> & IconPandaVariants
export type IconPandaProps = CreateWuiPandaProps<'svg', IconPandaOptions>

// todo dataTestId

export const IconPanda = React.forwardRef<SVGSVGElement, IconPandaProps>(
  ({ content, size = 'md', /* title ,*/ ...props }, ref) => {
    const className = props.className || ''
    if (!content) {
      return null
    }

    // todo
    // isFlag={content.isFlag}
    // stroked={content.stroked}

    return (
      <S.IconPanda
        // alt={title}
        className={`${className} wui-icon`}
        dangerouslySetInnerHTML={{ __html: content.block }}
        role="img"
        size={size}
        // title={title}
        viewBox={content.viewBox || '0 0 100 100'}
        {...props}
        ref={ref}
      />
    )
  }
)
