import { fr } from 'date-fns/locale/fr'

import { DatePicker } from '@/components/DatePicker'

const Example = () => {
  return <DatePicker locale={fr} name="welcome" value={new Date()} />
}

export default Example
