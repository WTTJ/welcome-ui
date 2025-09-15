import { Avatar } from '@old/Avatar'

const Example = () => {
  return (
    <>
      <Avatar name="Welcome to the Jungle" size="sm" />
      <Avatar name="Welcome to the Jungle" />
      <Avatar name="Welcome to the Jungle" size="lg" />
      <Avatar name="Welcome to the Jungle" size="xl" />
      <Avatar name="Welcome to the Jungle" size="xxl" />
      <Avatar color="orange-50" fontSize={20} h={130} name="Custom" w={130} />
    </>
  )
}

export default Example
