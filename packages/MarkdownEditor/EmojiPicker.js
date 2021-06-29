import React from 'react'
import { func } from 'prop-types'
import { NimblePicker } from 'emoji-mart'
import data from 'emoji-mart/data/apple.json'

import * as S from './styles'

export function EmojiPicker({ onSelect }) {
  return (
    <S.EmojiPicker>
      <NimblePicker
        autoFocus
        data={data}
        emoji="ok_hand"
        onSelect={onSelect}
        set="apple"
        title="Pick an emoji"
      />
    </S.EmojiPicker>
  )
}

EmojiPicker.propTypes /* remove-proptypes */ = {
  onSelect: func,
}
