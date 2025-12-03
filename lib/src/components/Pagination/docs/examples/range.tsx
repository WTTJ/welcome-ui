import { useState } from 'react'

import { Pagination } from '@/components/Pagination'
import type { PaginationProps } from '@/components/Pagination/types'

const Example = () => {
  const [page, setPage] = useState<PaginationProps['page']>(8)

  return (
    <Pagination
      aria-label="Range Pagination"
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={10}
      rangeDisplay={10}
    />
  )
}

export default Example
