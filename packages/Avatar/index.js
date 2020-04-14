import { array, number, oneOf, string } from 'prop-types'
import React, { memo } from 'react'
import { Box } from '@welcome-ui/box'
import { useTheme } from '@xstyled/styled-components'

import { randomColor } from './utils'
import * as S from './styles'

export const Avatar = memo(function Avatar({
  alt,
  color,
  fontSize,
  height,
  size = 'md',
  src,
  width,
  words,
  ...rest
}) {
  const theme = useTheme()
  const backgroundColor = color || randomColor(theme && theme.colors && theme.colors.sub)
  const avatarSize = theme.avatars.sizes[size]
  const avatarFontSize = fontSize || `calc(${width ? theme.toRem(width) : avatarSize} / 2.5)`

  function getInitials() {
    const initials = words[1] ? `${words[0][0]}${words[1][0]}` : words[0][0]
    return initials && initials.toUpperCase()
  }

  return (
    <S.Avatar
      arial-label={alt}
      backgroundColor={backgroundColor}
      height={height || avatarSize}
      width={width || avatarSize}
      {...rest}
    >
      {src && <img alt={alt} src={src} />}
      {!src && (
        <Box>
          <S.Text fontSize={avatarFontSize} m={0}>
            {getInitials()}
          </S.Text>
        </Box>
      )}
    </S.Avatar>
  )
})

Avatar.displayName = 'Avatar'

Avatar.propTypes = {
  alt: string.isRequired,
  color: string,
  fontSize: string,
  height: number,
  size: oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
  src: string,
  width: number,
  words: array.isRequired
}
