import * as React from 'react'

import { Button } from '@/Button'
import { DropdownMenu, useDropdownMenu } from '@/DropdownMenu'

const Example = () => {
  const dropdownMenu = useDropdownMenu()

  const handleClick = () => {
    // your code
  }

  return (
    <>
      <DropdownMenu.Trigger as={Button} store={dropdownMenu}>
        Dropdown Menu
      </DropdownMenu.Trigger>
      <DropdownMenu aria-label="Example" gutter="md" store={dropdownMenu}>
        <DropdownMenu.Item disabled onClick={handleClick} store={dropdownMenu}>
          Facebook
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick} store={dropdownMenu}>
          Instagram
        </DropdownMenu.Item>
        <DropdownMenu.Separator store={dropdownMenu} />
        <DropdownMenu.Item onClick={handleClick} store={dropdownMenu}>
          Github
        </DropdownMenu.Item>
      </DropdownMenu>
    </>
  )
}

export default Example
