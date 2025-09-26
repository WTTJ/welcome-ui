import { DatePicker } from '@/components/DatePicker'
import { DateIcon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <DatePicker icon={<DateIcon />} name="welcome" value={new Date()} />
      <DatePicker icon={<DateIcon />} iconPlacement="right" name="welcome" value={new Date()} />
    </>
  )
}

export default Example
