import { DatePicker } from '@old/DatePicker'
import { WttjIcon } from '@old/Icons'

const Example = () => {
  return (
    <>
      <DatePicker icon={<WttjIcon />} name="welcome" value={new Date()} />
      <DatePicker icon={<WttjIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
