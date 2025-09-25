import { DatePicker } from '@/components/DatePicker'

const Example = () => {
  return (
    <DatePicker
      dateFormat="MMM dd yyyy"
      maxDate={new Date()}
      name="welcome"
      placeholder="Select a date"
      popperProps={{ placement: 'top' }}
      value={null}
      yearDropdownItemNumber={30}
    />
  )
}

export default Example
