import { Icon } from '@/components/Icon'
import { TimePicker } from '@/components/TimePicker'

const Example = () => {
  return (
    <>
      <TimePicker
        className="border-2 border-neutral-40 bg-neutral-30"
        icon={<Icon name="calendar" />}
        name="welcome"
        value={new Date()}
      />
    </>
  )
}

export default Example
