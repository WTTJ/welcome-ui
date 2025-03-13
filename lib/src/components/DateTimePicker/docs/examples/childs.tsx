
import { DateTimePicker } from '@/DateTimePicker'
import { DatePicker } from '@/DatePicker'
import { TimePicker } from '@/TimePicker'
import { WttjIcon } from '@/Icons'

const Example = () => {
  return (
    <DateTimePicker name="welcome" value={new Date()}>
      <DatePicker icon={<WttjIcon />} iconPlacement="right" value={new Date()} />
      <TimePicker value={new Date()} />
    </DateTimePicker>
  )
}

export default Example
