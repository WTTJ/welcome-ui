import * as React from 'react'

import type { PaginationProps } from '@old/Pagination'
import { Pagination } from '@old/Pagination'

const Example = () => {
  const [page, setPage] = React.useState<PaginationProps['page']>(8)

  return (
    <Pagination
      aria-label="Pagination"
      getHref={page => `?page=${page}`}
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={10}
    />
  )
}

export default Example
