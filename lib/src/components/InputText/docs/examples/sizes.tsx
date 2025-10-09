import { Icon } from '@/components/Icon'
import { InputText } from '@/components/InputText'

const Example = () => {
  return (
    <>
      <InputText icon={<Icon name="user-circle" />} placeholder="Welcome" size="xs" />
      <InputText icon={<Icon name="user-circle" />} placeholder="Welcome" size="sm" />
      <InputText icon={<Icon name="user-circle" />} placeholder="Welcome" />
      <InputText icon={<Icon name="user-circle" />} placeholder="Welcome" size="lg" />
    </>
  )
}

export default Example
