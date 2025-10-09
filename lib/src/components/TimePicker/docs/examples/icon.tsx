import { Icon } from '@/components/Icon'
import { TimePicker } from '@/components/TimePicker'

const Example = () => {
  return (
    <>
      <TimePicker icon={<Icon name="calendar" />} name="welcome" value={new Date()} />
      <TimePicker icon={<Icon name="calendar" />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
