import { useState } from 'react'

import { FloatingActionBar } from '@/components/FloatingActionBar'
import { Pagination } from '@/components/Pagination'

const Example = () => {
  const [page, setPage] = useState(8)

  return (
    <FloatingActionBar>
      <Pagination
        aria-label="Example Pagination"
        condensed
        getHref={page => `?page=${page}`}
        onChange={page => setPage(Number(page))}
        page={page}
        pageCount={99}
      />
    </FloatingActionBar>
  )
}

export default Example
