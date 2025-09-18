import { Avatar } from '@/components/Avatar'

const Example = () => {
  return (
    <>
      <Avatar name="W" size="sm" />
      <Avatar name="We" size="md" />
      <Avatar name="Wel" size="lg" />
      <Avatar name="Welc" size="xl" />
      <Avatar name="Welco" size="xxl" />
      <Avatar className="bg-brand-40 w-[130px] h-[130px] text-[60px]" name="Custom" size="lg" />
    </>
  )
}

export default Example
