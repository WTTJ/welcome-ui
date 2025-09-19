import { Avatar } from '@/components/Avatar'

const Example = () => {
  return (
    <>
      <Avatar
        name="Small"
        size="sm"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar name="Medium" src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4" />
      <Avatar
        name="Large"
        size="lg"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        name="Extra Larga"
        size="xl"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        name="XX Large"
        size="xxl"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        className="size-[130px]"
        name="Custom value"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
    </>
  )
}

export default Example
