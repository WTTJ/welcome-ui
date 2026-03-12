import { useStoreState } from '@ariakit/react'
import { useState } from 'react'

import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { FloatingActionBar } from '@/components/FloatingActionBar'
import { Icon } from '@/components/Icon'
import { Pagination } from '@/components/Pagination'

const Example = () => {
  const menu = useDropdownMenu({ placement: 'top-end' })
  const isOpen = useStoreState(menu, 'open')
  const [page, setPage] = useState(1)

  const handleClick = () => {
    // your code
  }

  return (
    <FloatingActionBar>
      <Pagination
        aria-label="Example Pagination"
        condensed
        getHref={page => `?page=${page}`}
        onChange={page => setPage(Number(page))}
        page={page}
        pageCount={12}
        size="md"
      />

      <Button size="md" variant="secondary">
        <Icon name="sign-right" />
        <span>Action 3</span>
      </Button>
      <Button size="md" variant="secondary">
        <Icon name="sign-right" />
        <span>Action 2</span>
      </Button>
      <Button size="md" variant="secondary">
        <Icon name="sign-right" />
        <span>Action 1</span>
      </Button>

      <DropdownMenu.Trigger as={Button} size="md" store={menu} variant="secondary">
        {isOpen ? <Icon name="angle-up" /> : <Icon name="angle-down" />}
      </DropdownMenu.Trigger>

      <DropdownMenu aria-label="Complexity" store={menu}>
        <DropdownMenu.Item onClick={handleClick}>
          <span>Action 4</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>
          <span>Action 5</span>
        </DropdownMenu.Item>
      </DropdownMenu>
    </FloatingActionBar>
  )
}

export default Example
