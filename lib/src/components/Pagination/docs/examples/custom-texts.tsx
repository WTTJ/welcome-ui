import { useState } from 'react'

import { Pagination } from '@/components/Pagination'
import type { PaginationProps } from '@/components/Pagination/types'

const Example = () => {
  const [page, setPage] = useState<PaginationProps['page']>(1)

  return (
    <Pagination
      aria-label="Pagination with custom texts"
      navigationTexts={{
        firstPage: 'First',
        lastPage: 'Last',
        nextPage: 'Next',
        previousPage: 'Previous',
      }}
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={5}
      showEdgeControls
    />
  )
}

export default Example
