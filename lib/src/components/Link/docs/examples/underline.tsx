import * as React from 'react'
import { Link } from '@welcome-ui/link'
import { Text } from '@welcome-ui/text'
import { Stack } from '@welcome-ui/stack'
import { Box } from '@welcome-ui/box'
import { Avatar } from '@welcome-ui/avatar'

const Example = () => {
  return (
    <Stack>
      <Link href="#">
        <Avatar
          name="jungle"
          size="lg"
          src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
        />
        This is a text node
      </Link>
      <Link href="#">
        <Avatar name="jungle" size="lg" />
        <span>This is a text in a span tag</span>
      </Link>
      <Link href="#">
        <Avatar name="jungle" size="lg" />
        <Text>This is a text in a Text component</Text>
      </Link>
      <Link href="#">
        <Avatar name="jungle" size="lg" />
        <div>This is a text in a div tag (won’t add an underline)</div>
      </Link>
      <Link href="#">
        <Avatar name="jungle" size="lg" />
        <Box as="span">This is a Box with as property to span</Box>
      </Link>
      <Link href="#">
        <Avatar name="jungle" size="lg" />
        <div data-wui-link>This is a div with data-wui-link prop</div>
      </Link>
    </Stack>
  )
}

export default Example
