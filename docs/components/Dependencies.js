/* eslint-disable react/prop-types */
import React from 'react'
import { Tag } from '@welcome-ui/tag'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'

export const Dependencies = ({ dependencies }) => {
  if (!dependencies) {
    return 'None listed'
  }

  return (
    <Box as="ul" paddingLeft="xl">
      {Object.entries(dependencies).map(([dependency, version]) => {
        const baseVersion = version.replace(/[\^=~]/, '')
        return (
          <Box alignItems="flex-end" as="li" display="flex" key={dependency} py="xxs">
            <Link
              border="none"
              href={`https://npmjs.com/package/${dependency}/v/${baseVersion}`}
              rel="nofollow"
              target="_npm"
            >
              · {dependency}
            </Link>
            <Tag ml="xs" size="md">
              {version}
            </Tag>
          </Box>
        )
      })}
    </Box>
  )
}
