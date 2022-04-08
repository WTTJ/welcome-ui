/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'
import { Card } from '@welcome-ui/card'

import { components } from '../../components'

import { Item } from './Item'

export function Dependencies({ isPeer, name }) {
  const { dependencies, peerDependencies } = components[name]
  const data = isPeer ? peerDependencies : dependencies

  return (
    <Box>
      <Card mt="xxl">
        <Card.Body>
          <Box display="flex" flexWrap="wrap" mb="-md">
            {Object.entries(data).map(([dependency, version]) => {
              return <Item dependency={dependency} key={dependency} version={version} />
            })}
          </Box>
        </Card.Body>
      </Card>
    </Box>
  )
}
