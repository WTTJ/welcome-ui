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
        <DropdownMenu.Group>
          <DropdownMenu.GroupLabel>
            <Icon name="share" />
            Share
          </DropdownMenu.GroupLabel>
          <DropdownMenu.Item disabled onClick={handleClick}>
            Facebook
          </DropdownMenu.Item>
          <DropdownMenu.Item disabled onClick={handleClick}>
            <Icon name="instagram" size="lg" />
            <DropdownMenu.Content>
              Instagram
              <DropdownMenu.Description>This is Instagram</DropdownMenu.Description>
            </DropdownMenu.Content>
            <Icon name="angle-right" size="lg" />
          </DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Github</DropdownMenu.Item>
        </DropdownMenu.Group>
        <DropdownMenu.Separator />
        <DropdownMenu.Action onClick={handleClick}>
          <Icon name="plus" />
          More
        </DropdownMenu.Action>
      </DropdownMenu>
    </>
  )
}

export default Example
