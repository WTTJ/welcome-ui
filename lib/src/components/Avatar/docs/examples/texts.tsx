import { Avatar } from '@/components/Avatar'

const Example = () => {
  return (
    <>
      <Avatar name="W" size="sm" />
      <Avatar name="We" size="md" />
      <Avatar name="Wel" size="lg" />
      <Avatar name="Welc" size="xl" />
      <Avatar name="Welco" size="xxl" />
      <Avatar className="nine:bg-brand-40 nine:size-[130px] nine:text-[60px]" name="Custom" />
    </>
  )
}

export default Example
