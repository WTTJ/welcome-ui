import { DatePicker } from '@/components/DatePicker'
import { WttjIcon } from '@/components/Icon'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <DatePicker name="welcome" size="xs" value={new Date()} />
      <DatePicker name="welcome" size="sm" value={new Date()} />
      <DatePicker name="welcome" value={new Date()} />
      <DatePicker name="welcome" size="lg" value={new Date()} />
      Example with icon
      <DatePicker icon={<WttjIcon />} name="welcome" size="xs" value={new Date()} />
      <DatePicker icon={<WttjIcon />} name="welcome" size="sm" value={new Date()} />
      <DatePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <DatePicker icon={<WttjIcon />} name="welcome" size="lg" value={new Date()} />
    </div>
  )
}

export default Example
