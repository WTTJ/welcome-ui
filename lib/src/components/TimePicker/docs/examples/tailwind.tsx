import { DateIcon } from '@/components/Icon'
import { TimePicker } from '@/components/TimePicker'

const Example = () => {
  return (
    <>
      <TimePicker
        className="border-2 border-neutral-40 bg-neutral-30"
        icon={<DateIcon />}
        name="welcome"
        value={new Date()}
      />
    </>
  )
}

export default Example
