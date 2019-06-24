import React from 'react'

import { render } from '../../utils/tests'

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
    const { getByTestId } = render(
      <MarkdownEditor name="description" placeholder="Placeholder" value={content} />
    )

    const toolbar = getByTestId('mde.toolbar')
    expect(getToolbarItems(toolbar)).toEqual(DEFAULT_TOOLBAR.map(item => item.name))
  })

  it('should render provided toolbar items', () => {
    const { getByTestId } = render(
      <MarkdownEditor
        name="description"
        placeholder="Placeholder"
        toolbar={[{ name: 'bold' }, { name: 'italic' }]}
        value={content}
      />
    )

    const toolbar = getByTestId('mde.toolbar')
    expect(getToolbarItems(toolbar)).toEqual(['bold', 'italic'])
  })
})
