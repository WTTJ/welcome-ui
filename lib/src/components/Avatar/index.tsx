import React, { memo } from 'react'
import { Theme, useTheme } from '@xstyled/styled-components'

import { getInitials as defaultGetInitials, getColorByLength } from './utils'
import * as S from './styles'

import { ShapeOptions } from '@/Shape'
import { CreateWuiProps, forwardRef } from '@/System'
import { Box } from '@/Box'

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
      const backgroundColor = color || getColorByLength(theme.colors, name)
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
