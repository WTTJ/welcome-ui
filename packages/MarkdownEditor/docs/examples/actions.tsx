import * as React from 'react'
import { MarkdownEditor } from '@welcome-ui/markdown-editor'
import { Button } from '@welcome-ui/button'
import { Icons } from '@welcome-ui/icons.font'

const Example = () => {
  return (
    <MarkdownEditor
      actions={
        <>
          <Button shape="square" size="sm" variant="ghost">
            <Icons.Hashtag />
          </Button>
          <Button shape="square" size="sm" variant="ghost">
            <Icons.Mention />
          </Button>
          <Button shape="square" size="sm" variant="ghost">
            <Icons.Attachment />
          </Button>
        </>
      }
      name="description"
      placeholder="Add your description here"
    />
  )
}

export default Example
