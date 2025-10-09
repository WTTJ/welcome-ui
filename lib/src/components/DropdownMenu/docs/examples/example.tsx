import { useStoreState } from '@ariakit/react'

import { Button } from '@/components/Button'
import { ButtonGroup } from '@/components/ButtonGroup'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { Icon } from '@/components/Icon'

const Example = () => {
  const dropdownMenu = useDropdownMenu({ placement: 'bottom-end' })
  const isOpen = useStoreState(dropdownMenu, 'open')

  const handleClick = () => {
    // your code
  }

  return (
    <div className="relative">
      <ButtonGroup variant="tertiary">
        <Button onClick={handleClick}>
          <Icon name="plus" />
          <span>First Action</span>
        </Button>
        <DropdownMenu.Trigger as={Button} store={dropdownMenu}>
          {isOpen ? <Icon name="angle-up" /> : <Icon name="angle-down" />}
        </DropdownMenu.Trigger>
      </ButtonGroup>
      <DropdownMenu aria-label="Complexity" store={dropdownMenu}>
        <DropdownMenu.Item onClick={handleClick} store={dropdownMenu}>
          <Icon name="trash" className="mr-sm" size="sm" />
          <span>Second Action</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick} store={dropdownMenu}>
          <Icon name="paperclip" className="mr-sm" size="sm" />
          <span>Third Action</span>
        </DropdownMenu.Item>
      </DropdownMenu>
    </div>
  )
}

export default Example
