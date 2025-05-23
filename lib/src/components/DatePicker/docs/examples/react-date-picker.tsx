import { DatePicker } from '@/DatePicker'

const Example = () => {
  return (
    <DatePicker
      dateFormat="MMM dd yyyy"
      maxDate={new Date()}
      name="welcome"
      popperProps={{ zIndex: 50 }}
      value={new Date()}
      yearDropdownItemNumber={30}
    />
  )
}

export default Example
