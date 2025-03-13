
import { Avatar } from '@/Avatar'

const Example = () => {
  return (
    <>
      <Avatar
        name="Welcome jungle"
        size="sm"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        name="Welcome jungle"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        name="Welcome jungle"
        size="lg"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        name="Welcome jungle"
        size="xl"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        name="Welcome jungle"
        size="xxl"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        color="orange-80"
        fontSize={20}
        h={130}
        name="Custom"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
        w={130}
      />
    </>
  )
}

export default Example
