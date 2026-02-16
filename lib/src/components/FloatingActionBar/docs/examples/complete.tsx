import { useState } from 'react'

import { DropdownMenu } from '@/components/DropdownMenu'
import { FloatingActionBar } from '@/components/FloatingActionBar'
import { Icon } from '@/components/Icon'

const Example = () => {
  const [page, setPage] = useState(1)

  return (
    <FloatingActionBar>
      <FloatingActionBar.Pagination onChange={p => setPage(Number(p))} page={page} pageCount={12} />
      <FloatingActionBar.Button icon={<Icon name="sign-right" />}>
        Action 1
      </FloatingActionBar.Button>
      <FloatingActionBar.Button icon={<Icon name="sign-right" />}>
        Action 2
      </FloatingActionBar.Button>
      <FloatingActionBar.Button icon={<Icon name="sign-right" />}>
        Action 3
      </FloatingActionBar.Button>
      <FloatingActionBar.Actions>
        <DropdownMenu.Item>
          <Icon name="sign-right" />
          Action 4
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <Icon name="sign-right" />
          Action 5
        </DropdownMenu.Item>
      </FloatingActionBar.Actions>
    </FloatingActionBar>
  )
}

export default Example
