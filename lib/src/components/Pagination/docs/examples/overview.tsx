import { useState } from 'react'

import { Pagination } from '@/components/Pagination'
import type { PaginationProps } from '@/components/Pagination/types'

const Example = () => {
  const [page, setPage] = useState<PaginationProps['page']>(8)

  return (
    <Pagination
      aria-label="Example Pagination"
      getHref={page => `?page=${page}`}
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={10}
    />
  )
}

export default Example
