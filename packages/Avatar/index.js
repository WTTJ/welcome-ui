import { number, oneOf, oneOfType, string } from 'prop-types'
import React, { memo } from 'react'
import { Box } from '@welcome-ui/box'
import { useTheme } from '@xstyled/styled-components'

import { getInitials, getSeededColor } from './utils'
import * as S from './styles'

export const Avatar = memo(function Avatar({
  color,
  fontSize,
  h,
  name,
  shape = 'circle',
  size = 'md',
  src,
  w,
  ...rest
}) {
  const theme = useTheme()
  const backgroundColor = color || getSeededColor(theme && theme.colors && theme.colors.sub, name)
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

Avatar.propTypes /* remove-proptypes */ = {
  color: string,
  fontSize: oneOfType([string, number]),
  h: number,
  name: string.isRequired,
  shape: oneOf(['circle', 'square']),
  size: oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  src: string,
  w: number
}
