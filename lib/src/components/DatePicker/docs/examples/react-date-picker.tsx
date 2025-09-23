import { DatePicker } from '@/components/DatePicker'

const Example = () => {
  return (
    <DatePicker
      dateFormat="MMM dd yyyy"
      maxDate={new Date()}
      name="welcome"
      popperProps={{ placement: 'top' }}
      value={new Date()}
      yearDropdownItemNumber={30}
    />
  )
}

export default Example
