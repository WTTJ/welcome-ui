import React, { useMemo } from 'react'
import { Box } from '@welcome-ui/box'
import Bowser from 'bowser'
import { WuiProps } from '@welcome-ui/system'

const EMOJI_PATH = 'https://cdn.welcome-ui.com/emojis/'

// Apple by default for SSR
const IS_APPLE_OS =
  !process.browser || Bowser.parse(window.navigator.userAgent).platform.vendor === 'Apple'

export interface EmojiOptions {
  emoji?: string
  height?: number
  size?: number
  useAppleEmoji?: boolean
  width?: number
}

export type EmojiProps =  EmojiOptions & React.HTMLAttributes<HTMLImageElement> & WuiProps

export const Emoji: React.FC<EmojiProps> = ({
  emoji,
  height = 24,
  size,
  useAppleEmoji = IS_APPLE_OS,
  width = 24,
  ...rest
}) => {
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

// eslint-disable-next-line prettier/prettier
export const getEmojiName = (alias: string): string => alias?.replace?.(/:/g, '')
