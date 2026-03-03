import { IconStamp, ImageStamp } from '@/components/Stamp'

const Example = () => {
  return (
    <>
      <IconStamp name="icons" variant="brand" />
      <IconStamp name="icons" variant="warm" />
      <IconStamp name="icons" variant="green" />
      <IconStamp name="icons" variant="teal" />
      <IconStamp name="icons" variant="blue" />
      <IconStamp name="icons" variant="violet" />
      <IconStamp name="icons" variant="orange" />
      <IconStamp name="icons" variant="red" />
      <ImageStamp src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" />
    </>
  )
}

export default Example
