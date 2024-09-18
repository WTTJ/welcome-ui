import React from 'react'
import { act, screen, waitFor } from '@testing-library/react'

import { render } from '../../../utils/tests'
import { DEFAULT_TOOLBAR } from '../src/constants'
import { MarkdownEditor } from '../src'

const content =
  "# Hi!\n## Look at me!\n\nWe've got some **bold** and *italic* text, a cheeky bit of ~~strikethrough~~, some `inline code` and a [link](https://welcometothejungle.com). We can also do inline images by hand ![Milou](https://fr.tintin.com/images/tintin/persos/images/milou.png 'Milou') as well as:\n\n* Unordered lists\n* Unordered lists\n\n1. Ordered lists\n1. Ordered lists\n\nAnd of course the classics:\n\n```\nA code block\nwith multiple lines\n```\n\n> And a quote"

const getToolbarItems = (toolbar: HTMLElement) => {
  return Array.from(toolbar.childNodes).map(item => (item as HTMLElement).dataset.id || 'divider')
}

describe('<MarkdownEditor>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    // TODO: Figure out why full text not rendered
    expect(container).toHaveTextContent(/Hi!/)
  })

  it('should render all toolbar items', () => {
    render(<MarkdownEditor name="description" placeholder="Placeholder" value="" />)

    const toolbar = screen.getByRole('toolbar')

    expect(getToolbarItems(toolbar)).toEqual(DEFAULT_TOOLBAR.map(item => item.name))
  })

  it('should render provided toolbar items', () => {
    render(
      <MarkdownEditor
        name="description"
        placeholder="Placeholder"
        toolbar={[{ name: 'bold' }, { name: 'italic' }]}
        value=""
      />
    )

    const toolbar = screen.getByRole('toolbar')

    expect(getToolbarItems(toolbar)).toEqual(['bold', 'italic'])
  })

  it('should respect maxLength', async () => {
    const { user } = render(
      <MarkdownEditor maxLength={5} name="description" placeholder="Placeholder" value="" />
    )

    const textarea = screen.getByRole('textbox')

    await act(() => {
      user.type(textarea, 'abcdef')
    })
    await waitFor(() => {
      expect(textarea).toHaveValue('abcde')
    })
  })
})

// TODO: Figure out how to mock data call
describe.skip('<EmojiPicker>', () => {
  it('should show when clicking on icon in Toolbar', async () => {
    const { user } = render(
      <MarkdownEditor
        name="description"
        placeholder="Placeholder"
        toolbar={[{ name: 'emoji' }]}
        value=""
      />
    )

    const emojiButton = screen.getByTitle('Emoji')

    await act(() => user.click(emojiButton))

    const emojiPicker = screen.getByLabelText('Pick an emoji')

    expect(emojiPicker).toBeTruthy()
  })

  // We don't want to wait for
  it('should add emoji to MDE when clicking on one', async () => {
    const { container, user } = render(
      <MarkdownEditor
        name="description"
        placeholder="Placeholder"
        toolbar={[{ name: 'emoji' }]}
        value=""
      />
    )

    const emojiButton = screen.getByTitle('Emoji')

    await act(() => user.click(emojiButton))

    const emoji = screen.getAllByLabelText('😀, grinning')[0]

    await act(() => user.click(emoji))

    expect(container).toHaveTextContent('😀')
  })
})
