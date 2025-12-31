import { DatePicker } from '@/components/DatePicker'
import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <DatePicker icon={<Icon name="calendar" />} name="welcome" value={new Date()} />
      <DatePicker
        icon={<Icon name="calendar" />}
        iconPlacement="right"
        name="welcome"
        value={new Date()}
      />
    </>
  )
}

export default Example
