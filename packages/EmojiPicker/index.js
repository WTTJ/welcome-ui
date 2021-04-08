import React from 'react'

import basicEmojis from './basicEmojis.json'

export const EmojiPicker = () => (
  <div>
    {basicEmojis.map(emoji => (
      <img
        key={emoji.alias}
        src={`https://cdn.welcometothejungle.com/common/assets/emojis/apple/${encodeURIComponent(
          emoji.alias
        )}.png`}
      />
    ))}
  </div>
)
