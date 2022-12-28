import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../utils/tests'

import { EmojiPicker, useEmojiPicker } from './index'

describe('<EmojiPicker>', () => {
  it('should render correctly', () => {
    const Test = () => {
      const emojiPicker = useEmojiPicker()

      return (
        <>
          <EmojiPicker.Trigger state={emojiPicker}>open</EmojiPicker.Trigger>
          <EmojiPicker aria-label="emoji-picker" state={emojiPicker} value={null} />
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveTextContent('Smileys & Emotion')
  })
})
