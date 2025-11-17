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
          <Icon name="facebook" size="lg" />
          <DropdownMenu.Content>
            Facebook
            <DropdownMenu.Description>This is Facebook</DropdownMenu.Description>
          </DropdownMenu.Content>
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>
          <Icon name="instagram" size="lg" />
          <DropdownMenu.Content>
            Instagram
            <DropdownMenu.Description>This is Instagram</DropdownMenu.Description>
          </DropdownMenu.Content>
          <Icon name="angle-right" size="lg" />
        </DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Item onClick={handleClick}>
          <Icon name="github" size="lg" />
          <DropdownMenu.Content>
            Github
            <DropdownMenu.Description>This is Github</DropdownMenu.Description>
          </DropdownMenu.Content>
          <Icon name="angle-right" size="lg" />
        </DropdownMenu.Item>
      </DropdownMenu>
    </>
  )
}

export default Example
