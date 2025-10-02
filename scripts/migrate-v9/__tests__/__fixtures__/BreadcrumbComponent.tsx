import { Breadcrumb } from 'welcome-ui/Breadcrumb'

export const BreadcrumbComponent = () => {
  return (
    <div>
      <Breadcrumb mb="lg" separator=">">
        <Breadcrumb.Item href="/" mb="xl">
          Introduction
        </Breadcrumb.Item>
        <Breadcrumb.Item mb="xl">Disabled</Breadcrumb.Item>
        <Breadcrumb.Item mb="xl">Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  )
}
