import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { Icon } from '@/components/Icon'

const Example = () => {
  const dropdownMenuMd = useDropdownMenu()
  const dropdownMenuLg = useDropdownMenu()

  const handleClick = () => {
    // your code
  }

  return (
    <>
      <DropdownMenu.Trigger as={Button} store={dropdownMenuMd}>
        Dropdown Menu (md)
      </DropdownMenu.Trigger>

      <DropdownMenu aria-label="Example" size="md" store={dropdownMenuMd}>
        <DropdownMenu.Item disabled onClick={handleClick}>
          Facebook
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Instagram</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Github</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Action onClick={handleClick}>
          <Icon name="plus" /> More
        </DropdownMenu.Action>
      </DropdownMenu>

      <DropdownMenu.Trigger as={Button} store={dropdownMenuLg}>
        Dropdown Menu (lg)
      </DropdownMenu.Trigger>
      <DropdownMenu aria-label="Example" size="lg" store={dropdownMenuLg}>
        <DropdownMenu.Item disabled onClick={handleClick}>
          Facebook
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Instagram</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Github</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Action onClick={handleClick}>
          <Icon name="plus" /> More
        </DropdownMenu.Action>
      </DropdownMenu>
    </>
  )
}

export default Example
