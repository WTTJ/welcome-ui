import React from 'react'
import { fireEvent, screen } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { EmojiPicker, useEmojiPicker } from '../src'

const buttonText = 'open'

const EmojiPickerWrapper = () => {
  const emojiPicker = useEmojiPicker()

  return (
    <>
      <EmojiPicker.Trigger store={emojiPicker}>{buttonText}</EmojiPicker.Trigger>
      <EmojiPicker aria-label="emoji-picker" store={emojiPicker} value={null} />
    </>
  )
}

describe('<EmojiPicker>', () => {
  it('should render correctly', () => {
    render(<EmojiPickerWrapper />)

    const dialogText = screen.getByText('Smileys & Emotion')
    const button = screen.getByText(buttonText)

    fireEvent.click(button)

    expect(dialogText).toBeInTheDocument()
  })
})
