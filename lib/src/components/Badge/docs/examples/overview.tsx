import { Badge } from '@/components/Badge'

const Example = () => {
  return (
    <>
      <Badge size="sm" variant="brand" />
      <Badge variant="neutral">New</Badge>
      <Badge size="lg">{1}</Badge>
    </>
  )
}

export default Example
