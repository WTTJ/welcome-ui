import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'

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
        <DropdownMenu.Search placeholder="Search a flower" />
        <DropdownMenu.Item onClick={handleClick}>Elderflower</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Heather</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Camelia</DropdownMenu.Item>
        <DropdownMenu.Item onClick={handleClick}>Hydrangea</DropdownMenu.Item>
      </DropdownMenu>
    </>
  )
}

export default Example
