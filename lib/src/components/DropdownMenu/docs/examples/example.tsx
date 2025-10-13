import { useStoreState } from '@ariakit/react'

import { Button } from '@/components/Button'
import { ButtonGroup } from '@/components/ButtonGroup'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { AddIcon, AttachmentIcon, DownIcon, TrashIcon, UpIcon } from '@/components/Icon'

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
          <AddIcon />
          <span>First Action</span>
        </Button>
        <DropdownMenu.Trigger as={Button} store={dropdownMenu}>
          {isOpen ? <UpIcon /> : <DownIcon />}
        </DropdownMenu.Trigger>
      </ButtonGroup>
      <DropdownMenu aria-label="Complexity" store={dropdownMenu}>
        <DropdownMenu.Item onClick={handleClick} store={dropdownMenu}>
          <TrashIcon className="mr-sm" size="sm" />
          <span>Second Action</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick} store={dropdownMenu}>
          <AttachmentIcon className="mr-sm" size="sm" />
          <span>Third Action</span>
        </DropdownMenu.Item>
      </DropdownMenu>
    </div>
  )
}

export default Example
