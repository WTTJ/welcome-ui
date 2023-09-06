import React, { memo } from 'react'
import { Box } from '@welcome-ui/box'
import { ShapeOptions, ShapePanda, ShapePandaProps } from '@welcome-ui/shape'
import { Theme, useTheme } from '@xstyled/styled-components'
import { CreateWuiProps, forwardRef } from '@welcome-ui/system'
import { avatar, type AvatarVariantProps } from '@welcome-ui/panda/recipes'
import { token, type Token } from '@welcome-ui/panda/tokens'
import { cx } from '@welcome-ui/panda/css'
import { TextPanda } from '@welcome-ui/text'

import { getInitials as defaultGetInitials, getSeededColor } from './utils'
import * as S from './styles'

type SubColor = Theme['colors']
type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface AvatarOptions {
  color?: string | SubColor
  getInitials?: (name: string) => string
  name: string
  size?: Size
  src?: string
}

export type AvatarProps = CreateWuiProps<'div', AvatarOptions & ShapeOptions>

export const Avatar: React.FC<AvatarProps> = memo(
  forwardRef<'div', AvatarProps>(
    (
      {
        color,
        fontSize,
        getInitials = defaultGetInitials,
        h,
        name,
        shape = 'circle',
        size = 'md',
        src,
        w,
        ...rest
      },
      ref
    ) => {
      const theme = useTheme()
      const backgroundColor = color || getSeededColor(theme.colors, name)
      const avatarSize = theme.avatars.sizes[size]
      const avatarFontSize = fontSize || `calc(${w ? theme.toRem(w as number) : avatarSize} / 2.5)`

      return (
        <S.Avatar
          aria-label={name}
          backgroundColor={backgroundColor}
          h={h || avatarSize}
          ref={ref}
          role="img"
          shape={shape}
          w={w || avatarSize}
          {...rest}
        >
          {src && <img alt={name} src={src} />}
          {!src && (
            <Box>
              <S.Text fontSize={avatarFontSize} m={0}>
                {getInitials(name)}
              </S.Text>
            </Box>
          )}
        </S.Avatar>
      )
    }
  )
)

Avatar.displayName = 'Avatar'

export type AvatarPandaOptions = Omit<AvatarOptions, keyof AvatarVariantProps> &
  AvatarVariantProps &
  ShapeOptions
export type AvatarPandaProps = ShapePandaProps & AvatarPandaOptions

export const AvatarPanda = React.forwardRef<HTMLDivElement, AvatarPandaProps>(
  (
    {
      color,
      fontSize,
      className,
      getInitials = defaultGetInitials,
      name,
      shape = 'circle',
      size = 'md',
      src,
      style,
      ...rest
    },
    ref
  ) => {
    const classes = avatar({ size })
    const backgroundColor =
      (color as string) ||
      token.var(`colors.sub-${(name.length % 7) + 1}` as Token) ||
      token.var('colors.sub-1')
    const avatarFontSize = fontSize || rest.w ? `calc(${rest.w} / 2.5)` : undefined

    return (
      <ShapePanda
        aria-label={name}
        backgroundColor={color}
        className={cx(classes.root, className)}
        ref={ref}
        role="img"
        shape={shape}
        style={{ backgroundColor, ...style }}
        {...rest}
      >
        {src && <img alt={name} src={src} />}
        {!src && (
          <div>
            <TextPanda className={classes.text} style={{ fontSize: avatarFontSize }}>
              {getInitials(name)}
            </TextPanda>
          </div>
        )}
      </ShapePanda>
    )
  }
)
