import { Icon } from '@/components/Icon'
import { InputText } from '@/components/InputText'

const Example = () => {
  return (
    <div className="flex flex-col gap-md">
      <InputText disabled placeholder="Welcome" />
      <InputText
        disabled
        icon={<Icon name="user-circle" />}
        iconPlacement="right"
        placeholder="Welcome"
      />
    </div>
  )
}

export default Example
