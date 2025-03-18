import { DatePicker } from '@/DatePicker'

const Example = () => {
  return <DatePicker dateFormat="MM/yyyy" name="welcome" showMonthYearPicker value={new Date()} />
}

export default Example
