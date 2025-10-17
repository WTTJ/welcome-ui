import { Avatar } from '@/components/Avatar'

const Example = () => {
  return (
    <div className="flex flex-col gap-xxl">
      <div className="flex gap-xl items-center">
        <Avatar
          name="Welcome UI"
          size="lg"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
        <Avatar
          name="Welcome UI"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
        <Avatar
          name="Welcome UI"
          size="sm"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
        <Avatar
          name="Welcome UI"
          size="xs"
          src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
        />
      </div>
      <div className="flex gap-xl items-center">
        <Avatar name="Welcome UI" size="lg" />
        <Avatar name="Welcome UI" />
        <Avatar name="Welcome UI" size="sm" />
        <Avatar name="Welcome UI" size="xs" />
      </div>
      <div className="flex gap-xl items-center">
        <Avatar size="lg" />
        <Avatar />
        <Avatar size="sm" />
        <Avatar size="xs" />
      </div>
    </div>
  )
}

export default Example
