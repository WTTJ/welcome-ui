import * as React from 'react'
import { Link } from 'welcome-ui/Link'
import { Stack } from 'welcome-ui/Stack'

const Example = () => {
  return (
    <Stack spacing="xl">
      <Link href="#">Primary</Link>
      <Link href="#" variant="secondary">
        Secondary
      </Link>
      <Link display="inline" href="#random-link-multiple-lines" variant="primary">
        Ipsum ipsam fugiat doloribus sit hic ducimus dolorem Aperiam unde adipisci deserunt corporis
        neque commodi. Quasi odit esse molestias reprehenderit incidunt Velit non expedita atque
        exercitationem enim! Quidem quasi nihil.
      </Link>
    </Stack>
  )
}

export default Example
