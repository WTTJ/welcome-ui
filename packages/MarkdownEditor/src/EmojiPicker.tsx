import React from 'react'
import Picker from '@emoji-mart/react'
import type { Picker as BasePicker } from 'emoji-mart'

type PickerProps = ExtractProps<typeof BasePicker.Props>

import * as S from './styles'
import type { ExtractProps } from './utils'

export interface EmojiPicketOptions {
  onSelect?: PickerProps['onEmojiSelect']
}

export const EmojiPicker: React.FC<EmojiPicketOptions> = ({ onSelect }) => {
  return (
    <S.EmojiPicker>
      <Picker
        autoFocus
        data={async () => {
          const response = await fetch(
            'https://cdn.jsdelivr.net/npm/@emoji-mart/data@1.2.1/sets/15/apple.json'
          )
          return response.json()
        }}
        emoji="ok_hand"
        onEmojiSelect={onSelect}
        set="apple"
        title="Pick an emoji"
      />
    </S.EmojiPicker>
  )
}

export default EmojiPicker
