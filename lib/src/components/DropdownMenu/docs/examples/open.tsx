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
      <DropdownMenu aria-label="Example" store={dropdownMenu}>
        <DropdownMenu.Arrow store={dropdownMenu} />
        <DropdownMenu.Item hideOnClick={false} onClick={handleClick}>
          Instagram
        </DropdownMenu.Item>
        <DropdownMenu.Item hideOnClick={false} onClick={handleClick}>
          Facebook
        </DropdownMenu.Item>
      </DropdownMenu>
    </>
  )
}

export default Example
