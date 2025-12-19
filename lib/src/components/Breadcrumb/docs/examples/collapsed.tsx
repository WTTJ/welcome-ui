import { Breadcrumb } from '@/components/Breadcrumb'

const Example = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
      <Breadcrumb.Item collapsed href="/">
        Components
      </Breadcrumb.Item>
      <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Example
