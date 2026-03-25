import { DateIcon } from '@/components/Icon'
import { TimePicker } from '@/components/TimePicker'

const Example = () => {
  return (
    <>
      <TimePicker
        className="nine:border-2 nine:border-neutral-40 nine:bg-neutral-30"
        icon={<DateIcon />}
        name="welcome"
        value={new Date()}
      />
    </>
  )
}

export default Example
