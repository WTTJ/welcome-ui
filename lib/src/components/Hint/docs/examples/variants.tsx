import { Hint } from '@/components/Hint'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <Hint>default</Hint>
      <Hint variant="warning">warning</Hint>
      <Hint variant="danger">danger</Hint>
      <Hint variant="success">success</Hint>
    </div>
  )
}

export default Example
