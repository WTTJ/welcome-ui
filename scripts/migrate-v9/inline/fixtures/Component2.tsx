import { Breadcrumb } from '../../../../lib/src/old/components/Breadcrumb'

// Usage examples
export const Example = () => {
  return (
    <Breadcrumb mb="lg" separator=">">
      <Breadcrumb.Item href="/" mb="xl">
        Introduction
      </Breadcrumb.Item>
      <Breadcrumb.Item mb="xl">Disabled</Breadcrumb.Item>
      <Breadcrumb.Item mb="xl">Breadcrumb</Breadcrumb.Item>
    </Breadcrumb>
  )
}
