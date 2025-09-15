import { DatePicker } from '@old/DatePicker'
import { DateTimePicker } from '@old/DateTimePicker'
import { WttjIcon } from '@old/Icons'
import { TimePicker } from '@old/TimePicker'

const Example = () => {
  return (
    <DateTimePicker name="welcome" value={new Date()}>
      <DatePicker icon={<WttjIcon />} iconPlacement="right" value={new Date()} />
      <TimePicker value={new Date()} />
    </DateTimePicker>
  )
}

export default Example
