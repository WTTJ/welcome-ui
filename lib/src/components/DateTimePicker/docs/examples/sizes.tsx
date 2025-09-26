import { DatePicker } from '@/components/DatePicker'
import { DateTimePicker } from '@/components/DateTimePicker'
import { TimePicker } from '@/components/TimePicker'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <DateTimePicker name="welcome" size="xs" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>

      <DateTimePicker name="welcome" size="sm" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>

      <DateTimePicker name="welcome" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>

      <DateTimePicker name="welcome" size="lg" value={new Date()}>
        <DatePicker />
        <TimePicker />
      </DateTimePicker>
    </div>
  )
}

export default Example
