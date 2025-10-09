import { Icon } from '@/components/Icon'
import { InputText } from '@/components/InputText'

const Example = () => {
  return (
    <>
      <InputText icon={<Icon name="user-circle" />} placeholder="Welcome" />
      <InputText icon={<Icon name="user-circle" />} iconPlacement="right" placeholder="Welcome" />
      <InputText
        icon={<Icon name="user-circle" />}
        iconPlacement="right"
        isClearable
        placeholder="Welcome"
        size="xs"
      />
    </>
  )
}

export default Example
