import { BrowserRouter, Link as RouterLink } from 'react-router-dom'

import { Link } from '@/components/Link'

const Example = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col gap-xl">
        <Link as={RouterLink} to="/jobs">
          <span>Jobs</span>
        </Link>
      </div>
    </BrowserRouter>
  )
}

export default Example
