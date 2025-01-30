import * as React from 'react'

import { Pagination, PaginationProps } from '@/Pagination'
import { WttjIcon } from '@/Icons'

const Example = () => {
  const [page, setPage] = React.useState<PaginationProps['page']>(8)

  return (
    <Pagination
      aria-label="Pagination"
      getHref={page => `?page=${page}`}
      leftArrow={<WttjIcon size="xs" />}
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={10}
      rightArrow={<WttjIcon size="xs" />}
    />
  )
}

export default Example
