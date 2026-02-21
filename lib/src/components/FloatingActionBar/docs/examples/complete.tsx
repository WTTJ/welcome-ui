import { useState } from 'react'

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
        <FloatingActionBar.ActionsItem onClick={() => alert('Action 4')}>
          <Icon name="sign-right" />
          Action 4
        </FloatingActionBar.ActionsItem>
        <FloatingActionBar.ActionsItem onClick={() => alert('Action 5')}>
          <Icon name="sign-right" />
          Action 5
        </FloatingActionBar.ActionsItem>
      </FloatingActionBar.Actions>
    </FloatingActionBar>
  )
}

export default Example
