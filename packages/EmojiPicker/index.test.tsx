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
          <EmojiPicker.Trigger {...emojiPicker}>open</EmojiPicker.Trigger>
          <EmojiPicker aria-label="emoji-picker" value={null} {...emojiPicker} />
        </>
      )
    }

    const { getByText, queryByRole } = render(<Test />)
    expect(queryByRole('dialog')).toBeNull()
    const trigger = getByText('open')
    fireEvent.click(trigger)
    expect(queryByRole('dialog')).toHaveTextContent('Smileys & Emotion')
  })
})
