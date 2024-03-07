import React from 'react'
import { act, screen } from '@testing-library/react'

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
  it('should render correctly', async () => {
    const { user } = render(<EmojiPickerWrapper />)

    const dialogText = screen.getByText('Smileys & Emotion')
    const button = screen.getByText(buttonText)

    await act(() => user.click(button))

    expect(dialogText).toBeInTheDocument()
  })
})
