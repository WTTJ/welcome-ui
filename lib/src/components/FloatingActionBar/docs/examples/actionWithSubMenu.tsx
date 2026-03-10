import { useStoreState } from '@ariakit/react'

import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { FloatingActionBar } from '@/components/FloatingActionBar'
import { Icon } from '@/components/Icon'

const Example = () => {
  const menu = useDropdownMenu({ placement: 'top-end' })
  const menu2 = useDropdownMenu({ placement: 'top-end' })

  const isOpen = useStoreState(menu, 'open')
  const isOpen2 = useStoreState(menu, 'open')

  const handleClick = () => {
    // your code
  }

  return (
    <FloatingActionBar>
      <DropdownMenu.Trigger as={Button} size="md" store={menu} variant="secondary">
        <Icon name="ban" />
        <span>Reject</span>
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

      <DropdownMenu.Trigger as={Button} size="md" store={menu2} variant="secondary">
        <Icon name="sign-right" />
        <span>Progress</span>
        {isOpen2 ? <Icon name="angle-up" /> : <Icon name="angle-down" />}
      </DropdownMenu.Trigger>

      <DropdownMenu aria-label="Complexity" store={menu2}>
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
