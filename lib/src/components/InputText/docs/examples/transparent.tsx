import { Icon } from '@/components/Icon'
import { InputText } from '@/components/InputText'

const Example = () => {
  return (
    <div className="flex flex-col gap-md">
      <InputText icon={<Icon name="user-circle" />} placeholder="Welcome" transparent />
      <InputText placeholder="Welcome" transparent />
      <InputText placeholder="Welcome" transparent variant="warning" />
      <InputText placeholder="Welcome" transparent variant="danger" />
      <InputText placeholder="Welcome" transparent variant="success" />
      <InputText disabled placeholder="Welcome" transparent />
    </div>
  )
}

export default Example
