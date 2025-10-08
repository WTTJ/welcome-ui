import { Icon } from '@/components/Icon'

const Example = () => {
  return (
    <>
      <Icon name="package" size="xs" />
      <Icon name="package" size="sm" />
      <Icon name="package" />
      <Icon name="package" size="lg" />
      <Icon name="package" size="xl" />
      <Icon name="package" size="xxl" />
      <Icon className="size-[90px]" name="package" />
    </>
  )
}

export default Example
