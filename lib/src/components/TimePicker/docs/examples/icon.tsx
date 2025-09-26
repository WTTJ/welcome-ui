import { DateIcon } from '@/components/Icon'
import { TimePicker } from '@/components/TimePicker'

const Example = () => {
  return (
    <>
      <TimePicker icon={<DateIcon />} name="welcome" value={new Date()} />
      <TimePicker icon={<DateIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
