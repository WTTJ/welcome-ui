import groupBy from 'lodash.groupby'

import { Emoji } from './List'

export type InternalEmoji = Emoji & { rowIndex: number; colIndex: number }

// We need to set the width & height of the list for react-window
export const NB_EMOJIS_PER_ROW = 8
export const WIDTH = 300
export const ROW_HEIGHT = 32
export const HEIGHT = NB_EMOJIS_PER_ROW * ROW_HEIGHT

// We split the emojis to have an array of rows for react-window
// With the category & n array of maximum of 8 emojis per rows
// We also add the col & row on each emoji to allow us to handle keyboard navigation
export const formatEmojis: (emojis: Emoji[]) => InternalEmoji[][] = emojis => {
  let rowIndex = 0
  const emojisByCategory = Object.entries(groupBy(emojis, 'category'))

  return emojisByCategory.reduce((acc, [category, emojis]) => {
    const splittedEmojis = []
    for (let i = 0; i < emojis.length; i += NB_EMOJIS_PER_ROW) {
      let colIndex = 0
      const row = emojis.slice(i, i + NB_EMOJIS_PER_ROW).map(emoji => ({
        ...emoji,
        rowIndex,
        colIndex: colIndex++,
      }))
      splittedEmojis.push(row)
      rowIndex++
    }

    // Object.entries will stringify the name of the keys
    // and lodash.groupby will group emojis without `category` in `undefined`
    if (category && category !== 'undefined') {
      return [...acc, [category], ...splittedEmojis]
    }
    return [...acc, ...splittedEmojis]
  }, [])
}

export const getEmojiAlias: (emoji: Emoji) => Emoji['alias'] = emoji => {
  if (!emoji) return ''

  return `:${emoji.alias}:`
}
