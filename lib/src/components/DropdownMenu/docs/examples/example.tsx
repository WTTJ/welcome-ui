import {
  AddIcon,
  AttachmentIcon,
  Box,
  Button,
  ButtonGroup,
  DownIcon,
  DropdownMenu,
  TrashIcon,
  UpIcon,
  useDropdownMenu,
} from 'welcome-ui'
import * as React from 'react'

const Example = () => {
  const dropdownMenu = useDropdownMenu({ placement: 'bottom-end' })

  const isOpen = dropdownMenu.useState('open')

  const handleClick = () => {
    // your code
  }

  return (
    <Box position="relative">
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
          <TrashIcon mr="sm" size="sm" />
          <span>Second Action</span>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick} store={dropdownMenu}>
          <AttachmentIcon mr="sm" size="sm" />
          <span>Third Action</span>
        </DropdownMenu.Item>
      </DropdownMenu>
    </Box>
  )
}

export default Example
