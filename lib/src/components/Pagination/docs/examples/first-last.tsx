import { useState } from 'react'

import { Pagination } from '@/components/Pagination'
import type { PaginationProps } from '@/components/Pagination/types'

const Example = () => {
  const [page, setPage] = useState<PaginationProps['page']>(5)

  return (
    <Pagination
      aria-label="First Last Pagination"
      buttonFirstProps={{ title: 'Go to first page' }}
      buttonLastProps={{ title: 'Go to last page' }}
      onChange={page => setPage(Number(page))}
      page={page}
      pageCount={20}
      showEdgeControls={true}
    />
  )
}

export default Example
