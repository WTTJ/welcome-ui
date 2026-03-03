import { useState } from 'react'

import { FloatingActionBar } from '@/components/FloatingActionBar'
import { Icon } from '@/components/Icon'

const Example = () => {
  const [page, setPage] = useState(1)

  return (
    <FloatingActionBar>
      <FloatingActionBar.Pagination onChange={p => setPage(Number(p))} page={page} pageCount={12} />
      <FloatingActionBar.Button>
        <Icon name="sign-right" />
        <span>Action 1</span>
      </FloatingActionBar.Button>
      <FloatingActionBar.Button>
        <span>Action 2</span>
      </FloatingActionBar.Button>
      <FloatingActionBar.Button>
        <span>Action 3</span>
      </FloatingActionBar.Button>
      <FloatingActionBar.Actions>
        <FloatingActionBar.ActionsItem onClick={() => alert('Action 4')}>
          <Icon name="sign-right" />
          <span>Action 4</span>
        </FloatingActionBar.ActionsItem>
        <FloatingActionBar.ActionsItem onClick={() => alert('Action 5')}>
          <Icon name="sign-right" />
          <span>Action 5</span>
        </FloatingActionBar.ActionsItem>
      </FloatingActionBar.Actions>
    </FloatingActionBar>
  )
}

export default Example
