import { Stepper } from '@/components/Stepper'

const Example = () => {
  return (
    <>
      <Stepper.Item onClick={() => {}}>Default</Stepper.Item>
      <Stepper.Item isOpen onClick={() => {}}>
        Open
      </Stepper.Item>
      <Stepper.Item isCompleted onClick={() => {}}>
        Completed
      </Stepper.Item>
    </>
  )
}

export default Example
