import { IconStamp, ImageStamp } from '@/components/Stamp'

const Example = () => {
  return (
    <>
      <IconStamp name="icons" size="sm" variant="brand" />
      <IconStamp name="icons" size="md" variant="brand" />
      <IconStamp name="icons" size="lg" variant="brand" />
      <ImageStamp
        size="sm"
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <ImageStamp
        size="md"
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
      <ImageStamp
        size="lg"
        src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />
    </>
  )
}

export default Example
