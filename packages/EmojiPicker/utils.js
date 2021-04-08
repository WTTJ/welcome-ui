export const NB_EMOJIS_PER_ROW = 8
export const WIDTH = 300
export const ROW_HEIGHT = 32
export const HEIGHT = NB_EMOJIS_PER_ROW * ROW_HEIGHT

export const getEmojiValue = emoji => {
  const alias = getEmojiAlias(emoji)
  const file = /^https?:/.test(emoji.emoji) ? emoji.emoji : '_destroy'
  return {
    file,
    alias
  }
}

// We split the emojis to have an array of rows for react-window
// With the category & n array of maximum of 9 emojis per rows
export const formatEmojis = emojis => {
  let rowIndex = 0
  // Custom emojis don't have categories
  if (Array.isArray(emojis)) {
    emojis = { ['']: emojis }
  }
  return Object.entries(emojis).reduce((acc, [category, emojis]) => {
    const splittedEmojis = []
    for (let i = 0; i < emojis.length; i += NB_EMOJIS_PER_ROW) {
      let colIndex = 0
      const row = emojis.slice(i, i + NB_EMOJIS_PER_ROW).map(emoji => ({
        ...emoji,
        rowIndex,
        colIndex: colIndex++
      }))
      splittedEmojis.push(row)
      rowIndex++
    }

    if (category) {
      return [...acc, [category], ...splittedEmojis]
    }
    return [...acc, ...splittedEmojis]
  }, [])
}

// Can be an alias of a custom emoji (e.g: `alias:martin-qui-mange-un-sandwich-au-jambon`)
// or an alias of an existing emoji (e.g: `alias:sweat-smile`)
// or a normal emoji (e.g: `:sweat-smile:`)
export const getEmojiName = alias => alias.replace(/^alias|:/g, '')

export const getEmojiAlias = emoji => {
  if (!emoji) return ''

  let alias = emoji.alias || emoji.name
  return `:${alias}:`
}
