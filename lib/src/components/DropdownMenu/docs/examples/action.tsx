import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { Icon } from '@/components/Icon'

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
        <DropdownMenu.Item disabled onClick={handleClick}>
          Facebook
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Instagram</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Action onClick={handleClick}>
          <Icon name="plus" />
          Action
        </DropdownMenu.Action>
      </DropdownMenu>
    </>
  )
}

export default Example
