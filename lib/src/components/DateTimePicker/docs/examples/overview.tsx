import { DatePicker } from '@/components/DatePicker'
import { DateTimePicker } from '@/components/DateTimePicker'
import { DateIcon } from '@/components/Icon'
import { TimePicker } from '@/components/TimePicker'

const Example = () => {
  return (
    <DateTimePicker name="welcome" value={new Date()}>
      <DatePicker icon={<DateIcon />} iconPlacement="right" />
      <TimePicker />
    </DateTimePicker>
  )
}

export default Example
