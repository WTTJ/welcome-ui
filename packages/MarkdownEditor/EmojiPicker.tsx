import React from 'react'
import { NimblePicker, PickerProps } from 'emoji-mart'
import data from 'emoji-mart/data/apple.json'

import * as S from './styles'

export interface EmojiPicketOptions {
  onSelect?: PickerProps['onSelect']
}

export const EmojiPicker: React.FC<EmojiPicketOptions> = ({ onSelect }) => {
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
