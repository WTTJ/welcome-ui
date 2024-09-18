import * as React from 'react'
import { MarkdownEditor } from '@welcome-ui/markdown-editor'
import type { CreateEvent } from '@welcome-ui/utils'

const Example = () => {
  const [value, setValue] = React.useState<string>(
    "# Hi!\n## Look at me!\n\nWe've got some **bold** and *italic* text, a cheeky bit of ~~strikethrough~~, some `inline code` and a [link](https://welcometothejungle.com). We can also do inline images by hand ![Milou](https://fr.tintin.com/images/tintin/persos/images/milou.png 'Milou') as well as:\n\n* Unordered lists\n* Unordered lists\n\n1. Ordered lists\n1. Ordered lists\n\nAnd of course the classics:\n\n```\nA code block\nwith multiple lines\n```\n\n> And a quote"
  )

  const handleChange = (e: CreateEvent) => {
    setValue(e.target?.value as string)
  }

  return (
    <MarkdownEditor
      name="description"
      onChange={handleChange}
      placeholder="Add your description here"
      value={value}
    />
  )
}

export default Example
