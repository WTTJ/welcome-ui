/* eslint-disable react/prop-types */
import React from 'react'

import { Tag } from '../packages/Tag/index'
import { Link } from '../packages/Link/index'
import { Box } from '../packages/Box/index'

export const Dependencies = ({ dependencies }) => {
  if (!dependencies) {
    return 'None listed'
  }

  return (
    <ul>
      {Object.entries(dependencies).map(([dependency, version]) => {
        const baseVersion = version.replace(/[\^=~]/, '')
        return (
          <Box as="li" key={dependency} mb="xxs">
            <Link
              href={`https://npmjs.com/package/${dependency}/v/${baseVersion}`}
              rel="nofollow"
              target="_npm"
            >
              {dependency}
            </Link>
            <Tag ml="sm" size="md">
              {version}
            </Tag>
          </Box>
        )
      })}
    </ul>
  )
}
