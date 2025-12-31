import { Badge } from '@/components/Badge'
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
            <Icon name="folder" />
            Flowering Shrubs
            <Badge className="ml-auto">4</Badge>
          </DropdownMenu.GroupLabel>
          <DropdownMenu.Item onClick={handleClick}>Elderflower</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Heather</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Camelia</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Hydrangea</DropdownMenu.Item>
        </DropdownMenu.Group>

        <DropdownMenu.Separator />

        <DropdownMenu.Group>
          <DropdownMenu.GroupLabel>
            <Icon name="folder" />
            Umbellifers
            <Badge className="ml-auto">3</Badge>
          </DropdownMenu.GroupLabel>
          <DropdownMenu.Item onClick={handleClick}>Angelica</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Queen Anne’s Lace</DropdownMenu.Item>
          <DropdownMenu.Item onClick={handleClick}>Cow Parsley</DropdownMenu.Item>
        </DropdownMenu.Group>
      </DropdownMenu>
    </>
  )
}

export default Example
