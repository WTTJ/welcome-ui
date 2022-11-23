import React from 'react'
import { Box } from '@welcome-ui/box'
import { Card } from '@welcome-ui/card'

import { Item } from './Item'

export function Dependencies({ dependencies }) {
  if (!dependencies) {
    return 'None listed'
  }

  return (
    <Box>
      <Card $mt="sm">
        <Card.Body>
          <Box $display="flex" $flexWrap="wrap" $mb="-md">
            {Object.entries(dependencies).map(([dependency, version]) => {
              return <Item dependency={dependency} key={dependency} version={version} />
            })}
          </Box>
        </Card.Body>
      </Card>
    </Box>
  )
}
