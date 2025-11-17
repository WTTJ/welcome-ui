import { Button } from '@/components/Button'
import { DropdownMenu, useDropdownMenu } from '@/components/DropdownMenu'
import { Icon } from '@/components/Icon'

const Example = () => {
  const dropdownMenu = useDropdownMenu({
    defaultValues: {
      provider: ['facebook', 'instagram', 'linkedin'],
      radio: 'twiter',
    },
  })

  const handleClick = () => {
    // your code
  }

  return (
    <>
      <DropdownMenu.Trigger as={Button} store={dropdownMenu}>
        Dropdown Menu
      </DropdownMenu.Trigger>

      <DropdownMenu aria-label="Example" store={dropdownMenu}>
        <DropdownMenu.Item
          name="provider"
          onClick={handleClick}
          value="facebook"
          variant="checkbox-mark"
        >
          Facebook
        </DropdownMenu.Item>
        <DropdownMenu.Item
          name="provider"
          onClick={handleClick}
          value="instagram"
          variant="checkbox"
        >
          Instagram
        </DropdownMenu.Item>
        <DropdownMenu.Item name="radio" onClick={handleClick} value="github" variant="radio-mark">
          Github
        </DropdownMenu.Item>
        <DropdownMenu.Item name="radio" onClick={handleClick} value="twitter" variant="radio">
          Twitter
        </DropdownMenu.Item>
        <DropdownMenu.Item name="provider" onClick={handleClick} value="linkedin" variant="toggle">
          Linkedin
        </DropdownMenu.Item>

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
