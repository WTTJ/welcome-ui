import * as React from 'react'
import { MarkdownEditor } from '@welcome-ui/markdown-editor'

const Example = () => {
  return (
    <MarkdownEditor
      name="description"
      placeholder="Add your description here"
      toolbar={[
        { name: 'bold' },
        { name: 'italic' },
        { name: 'link' },
        { name: 'divider' },
        { name: 'ordered_list' },
        { name: 'unordered_list' },
      ]}
    />
  )
}

export default Example
