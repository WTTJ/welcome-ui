import React, { memo } from 'react'
import { Box } from '@welcome-ui/box'
import { Shape } from '@welcome-ui/shape'
import { useTheme } from '@xstyled/styled-components'
import { WuiProps } from '@welcome-ui/system'
import { WuiTheme } from '@welcome-ui/core'

import { getInitials as defaultGetInitials, getSeededColor } from './utils'
import * as S from './styles'

type SubColor = WuiTheme['colors']['sub']
type Size = 'sm' | 'md' | 'lg' | 'xl' | 'xxl'

export interface AvatarProps {
  color?: string | SubColor
  getInitials?: (name: string) => string
  name: string
  shape?: Shape
  size?: Size
  src?: string
}

export const Avatar: React.FC<AvatarProps & WuiProps> = memo(function Avatar({
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
}) {
  const theme = useTheme()
  const backgroundColor = color || getSeededColor(theme.colors.sub, name)
  const avatarSize = theme.avatars.sizes[size]
  const avatarFontSize = fontSize || `calc(${w ? theme.toRem(w) : avatarSize} / 2.5)`

  return (
    <S.Avatar
      aria-label={name}
      backgroundColor={backgroundColor}
      h={h || avatarSize}
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
})

Avatar.displayName = 'Avatar'
