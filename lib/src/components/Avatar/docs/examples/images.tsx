import { Avatar } from '@/components/Avatar'

const Example = () => {
  return (
    <>
      <Avatar
        name="Welcome jungle"
        size="xxl"
        src="https://avatars3.githubusercontent.com/u/13100706?s=200&v=4"
      />
      <Avatar
        name="Custom"
        size="xxl"
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
    </>
  )
}

export default Example
