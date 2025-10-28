import { Breadcrumb } from '@/components/Breadcrumb'

const Example = () => {
  return (
    <div>
      {/* Set default icons for all items */}
      <Breadcrumb icon>
        <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>

      {/* Set specific icons for individual items */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
        <Breadcrumb.Item icon="archive-alt">Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}

export default Example
