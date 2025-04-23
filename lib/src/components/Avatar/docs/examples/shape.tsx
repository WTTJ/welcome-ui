import * as React from 'react'

import { Avatar } from '@/Avatar'

const Example = () => {
  return (
    <>
      <Avatar
        name="Welcome jungle"
        shape="square"
        size="xxl"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar name="Welcome jungle" shape="square" size="xxl" />
    </>
  )
}

export default Example
