
import { Breadcrumb } from '@/Breadcrumb'
import { Stack } from '@/Stack'

const Example = () => {
  return (
    <Stack>
      <Breadcrumb separator="/">
        <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb separator="-">
        <Breadcrumb.Item href="/">Introduction</Breadcrumb.Item>
        <Breadcrumb.Item href="/">Components</Breadcrumb.Item>
        <Breadcrumb.Item>Breadcrumb</Breadcrumb.Item>
      </Breadcrumb>
    </Stack>
  )
}

export default Example
