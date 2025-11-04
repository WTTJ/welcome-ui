import { useState } from 'react'

import { Pagination } from '@/components/Pagination'
import type { PaginationProps } from '@/components/Pagination/types'

const Example = () => {
  const [page, setPage] = useState<PaginationProps['page']>(3)

  return (
    <Pagination
      aria-label="Medium Size Pagination"
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={10}
      size="md"
    />
  )
}

export default Example
