import React from 'react'
import { string } from 'prop-types'
import { Box } from '@welcome-ui/box'
import Bowser from 'bowser'

// TODO: change path to not use our cdn
const EMOJI_PATH = 'https://cdn.welcometothejungle.com/common/assets/emojis/'

// TODO: handle ssr instead of showing apple by default
const isApple =
  process.browser && Bowser.parse(window.navigator.userAgent).platform.vendor === 'Apple'
const getEmojiSrc = emoji => {
  if (/^https:\/\//.test(emoji)) return emoji
  return `${EMOJI_PATH}${isApple ? 'apple/' : 'google/'}${encodeURIComponent(emoji)}.png`
}

export function Emoji({ emoji, ...rest }) {
  if (!emoji) return null

  return (
    <Box
      as="img"
      height={24}
      src={getEmojiSrc(emoji)}
      verticalAlign="text-bottom"
      width={24}
      {...rest}
    />
  )
}

Emoji.propTypes = {
  // The slack emoji, e.g: :martin-qui-mange-un-sandwich-au-jambon:
  emoji: string
}
