import React, { useMemo } from 'react'
import { bool, number, string } from 'prop-types'
import { Box } from '@welcome-ui/box'
import Bowser from 'bowser'

// TODO: change path to not use our cdn
const EMOJI_PATH = 'https://cdn.welcometothejungle.com/common/assets/emojis/'

// Apple by default for SSR
const IS_APPLE_OS =
  !process.browser || Bowser.parse(window.navigator.userAgent).platform.vendor === 'Apple'

export function Emoji({
  emoji,
  useAppleEmoji = IS_APPLE_OS,
  size,
  width = 24,
  height = 24,
  ...rest
}) {
  const isUrl = useMemo(() => {
    try {
      new URL(emoji)
      return true
    } catch (_) {
      return false
    }
  }, [emoji])

  if (!emoji) return null

  const emojiName = !isUrl && getEmojiName(emoji)
  const alt = isUrl ? null : emojiName
  const src = isUrl
    ? emoji
    : `${EMOJI_PATH}${useAppleEmoji ? 'apple/' : 'google/'}${encodeURIComponent(emojiName)}.png`

  return (
    <Box alt={alt} as="img" height={size || height} src={src} width={size || width} {...rest} />
  )
}

Emoji.propTypes = {
  /** The slack emoji, e.g: :sweat-smile: or a URL */
  emoji: string,
  height: number,
  /** Helper to prevent to set width & height */
  size: number,
  /** Needed for SSR, it defaults to true on the server */
  useAppleEmoji: bool,
  width: number
}

export const getEmojiName = alias => alias?.replace(/:/g, '')
