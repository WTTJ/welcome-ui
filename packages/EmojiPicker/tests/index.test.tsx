import React from 'react'
import { fireEvent } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { EmojiPicker, useEmojiPicker } from '../src'

describe('<EmojiPicker>', () => {
  it('should render correctly', () => {
    const Test = () => {
      const emojiPicker = useEmojiPicker()

      return (
        <>
          <EmojiPicker.Trigger {...emojiPicker}>open</EmojiPicker.Trigger>
          <EmojiPicker aria-label="emoji-picker" value={null} {...emojiPicker} />
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    fireEvent.click(getByText('open'))
    expect(queryByRole('dialog')).toHaveTextContent('Smileys & Emotion')
  })
})
