import { useTheme } from '@xstyled/styled-components'

import { Box } from '@/Box'
import type { ShapeOptions } from '@/Shape'
import type { CreateWuiProps } from '@/System'
import { forwardRef } from '@/System'

import * as S from './styles'
import type { AvatarColors, Size } from './theme'
import { getInitials as defaultGetInitials, getColorByLength } from './utils'

export interface AvatarOptions {
  color?: AvatarColors
  getInitials?: (name: string) => string
  name: string
  size?: Size
  src?: string
}

export type AvatarProps = CreateWuiProps<'div', AvatarOptions & ShapeOptions>

export const Avatar = forwardRef<'div', AvatarProps>(
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
        {src ? <img alt={name} src={src} /> : null}
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

Avatar.displayName = 'Avatar'
