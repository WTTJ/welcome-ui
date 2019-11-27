import React from 'react'

import { Tag } from '../../../../src/components/Tag'

const { version } = require('../../../../package.json')

export const TagVersion = () => (
  <a
    alt="npm package"
    href="https://www.npmjs.com/package/welcome-ui"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
    target="_blank"
  >
    <Tag size="lg" variant="dark">
      {`v${version}`}
    </Tag>
  </a>
)
