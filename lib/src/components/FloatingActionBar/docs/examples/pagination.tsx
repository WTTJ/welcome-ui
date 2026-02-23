import { useState } from 'react'

import { FloatingActionBar } from '@/components/FloatingActionBar'

const Example = () => {
  const [page, setPage] = useState(1)

  return (
    <FloatingActionBar>
      <FloatingActionBar.Pagination onChange={setPage} page={page} pageCount={12} />
    </FloatingActionBar>
  )
}

export default Example
