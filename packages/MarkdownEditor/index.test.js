import React from 'react'
import { fireEvent, waitForElement } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { render } from '../Core/utils/tests'

import { DEFAULT_TOOLBAR } from './constants'

import { MarkdownEditor } from './index'

const content =
  "# Hi!\n## Look at me!\n\nWe've got some **bold** and *italic* text, a cheeky bit of ~~strikethrough~~, some `inline code` and a [link](https://welcometothejungle.com). We can also do inline images by hand ![Milou](https://fr.tintin.com/images/tintin/persos/images/milou.png 'Milou') as well as:\n\n* Unordered lists\n* Unordered lists\n\n1. Ordered lists\n1. Ordered lists\n\nAnd of course the classics:\n\n```\nA code block\nwith multiple lines\n```\n\n> And a quote"

const getToolbarItems = toolbar => {
  return Array.from(toolbar.childNodes).map(item => item.dataset.id || 'divider')
}

describe('<MarkdownEditor>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    // TODO: Figure out why full text not rendered
    expect(container).toHaveTextContent('Hi!')
  })

  it('should render all toolbar items', () => {
    const { getByRole } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    const toolbar = getByRole('toolbar')
    expect(getToolbarItems(toolbar)).toEqual(DEFAULT_TOOLBAR.map(item => item.name))
  })

  it('should render provided toolbar items', () => {
    const { getByRole } = render(
      <MarkdownEditor
        name="description"
        placeholder="Placeholder"
        toolbar={[{ name: 'bold' }, { name: 'italic' }]}
        value={content}
      />
    )

    const toolbar = getByRole('toolbar')
    expect(getToolbarItems(toolbar)).toEqual(['bold', 'italic'])
  })
})

describe('<EmojiPicker>', () => {
  it('should show when clicking on icon in Toolbar', () => {
    const { getByLabelText, getByTitle } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    const emojiButton = getByTitle('Emoji')
    fireEvent.click(emojiButton)

    const emojiPicker = getByLabelText('Pick an emoji')
    expect(emojiPicker).toBeTruthy()
  })

  it('should add emoji to MDE when clicking on one', () => {
    const { container, getAllByLabelText, getByTitle } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    const emojiButton = getByTitle('Emoji')
    fireEvent.click(emojiButton)

    const emoji = getAllByLabelText('😀, grinning')[0]
    fireEvent.click(emoji)

    expect(container).toHaveTextContent('😀# Hi!')
  })

  it.skip('should add emoji to MDE when clicking on one', () => {
    const { container, getAllByLabelText, getByTitle } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    const emojiButton = getByTitle('Emoji')
    fireEvent.click(emojiButton)

    const emoji = getAllByLabelText('😀, grinning')[0]
    fireEvent.click(emoji)

    expect(container).toHaveTextContent('😀# Hi!')
  })

  it.skip('should filter emojis when searching', () => {
    const { container, debug, getByLabelText, getByPlaceholderText, getByTitle } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    const emojiButton = getByTitle('Emoji')
    fireEvent.click(emojiButton)

    let results = getByLabelText('Search Results').querySelector('ul')
    expect(results.children.length).toBe(0)

    const search = getByPlaceholderText('Search')
    userEvent.type(search, 'smile')

    // TODO: Fix `waitForElement` which never gets called :(
    waitForElement(() => getByLabelText('Search Results').querySelector('ul li').length, {
      container
    }).then(results => {
      expect(results.children.length).toBe(0)
      const smile = results.children[0].querySelector('button')
      expect(smile.getAttribute('data-role')).toBe('😄, smile')
    })
  })
})
