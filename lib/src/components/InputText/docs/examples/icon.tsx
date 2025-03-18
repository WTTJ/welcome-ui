import { InputText } from '@/InputText'
import { AvatarIcon } from '@/Icons'

const Example = () => {
  return (
    <>
      <InputText icon={<AvatarIcon />} placeholder="Welcome" />
      <InputText icon={<AvatarIcon />} iconPlacement="right" placeholder="Welcome" />
      <InputText
        icon={<AvatarIcon />}
        iconPlacement="right"
        isClearable
        placeholder="Welcome"
        size="xs"
      />
    </>
  )
}

export default Example
