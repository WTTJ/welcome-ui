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
        <DropdownMenu.Item disabled onClick={handleClick}>
          Facebook
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Instagram</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item onClick={handleClick}>Github</DropdownMenu.Item>
      </DropdownMenu>
    </>
  )
}

export default Example
