import { DatePicker } from '@/components/DatePicker'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <div className="flex flex-col gap-xl">
      <DatePicker name="welcome" size="sm" value={new Date()} />
      <DatePicker name="welcome" size="md" value={new Date()} />
      <DatePicker name="welcome" value={new Date()} />
      Example with icon
      <DatePicker icon={<Icon name="calendar" />} name="welcome" size="sm" value={new Date()} />
      <DatePicker icon={<Icon name="calendar" />} name="welcome" size="md" value={new Date()} />
      <DatePicker icon={<Icon name="calendar" />} name="welcome" value={new Date()} />
    </div>
  )
}

export default Example
