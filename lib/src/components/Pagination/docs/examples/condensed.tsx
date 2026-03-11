import { useState } from 'react'

import { Pagination } from '@/components/Pagination'
import type { PaginationProps } from '@/components/Pagination/types'

const Example = () => {
  const [page, setPage] = useState<PaginationProps['page']>(8)

  return (
    <Pagination
      aria-label="Example Pagination"
      condensed
      getHref={page => `?page=${page}`}
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={99}
      size="md"
    />
  )
}

export default Example
