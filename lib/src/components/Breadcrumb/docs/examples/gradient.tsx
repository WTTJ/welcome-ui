import { Breadcrumb } from '@/components/Breadcrumb'

const Example = () => {
  return (
    <Breadcrumb className="max-w-250">
      <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
      <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Example
