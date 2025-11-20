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
        <DropdownMenu.Item onClick={handleClick}>Elderflower</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Heather</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Camelia</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Hydrangea</DropdownMenu.Item>

        <DropdownMenu.Separator />

        <DropdownMenu.Submenu
          aria-label="Find"
          item={
            <>
              <Icon name="search" /> Find <Icon className="ml-auto" name="angle-right" />
            </>
          }
        >
          <DropdownMenu.Item onClick={handleClick}>Search the Web...</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Find...</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Find Next</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Find Previous</DropdownMenu.Item>
        </DropdownMenu.Submenu>
      </DropdownMenu>
    </>
  )
}

export default Example
