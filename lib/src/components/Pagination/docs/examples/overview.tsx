import { Pagination, PaginationProps } from 'welcome-ui'
import * as React from 'react'

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
