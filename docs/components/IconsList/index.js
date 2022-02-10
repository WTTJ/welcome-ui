/* eslint-disable react/prop-types */
import React from 'react'
import { Icons as FontIcons } from '@welcome-ui/icons.font'
import * as Icons from '@welcome-ui/icons'
import { Box } from '@welcome-ui/box'

import { toPascalCase } from '../../../utils/strings'

import { Item } from './Item'

export function IconsList({ icons, isIconFont }) {
  return (
    <Box display="flex" flexWrap="wrap">
      {icons.map(key => {
        const name = toPascalCase(key)
        const componentName = isIconFont ? `Icons.${name}` : `${name}Icon`
        const Icon = isIconFont ? FontIcons[name] : Icons[componentName]
        if (!Icon) {
          // eslint-disable-next-line no-console
          console.error(`The "${key}" icon is missing`)
        }

        return (
          <Item
            componentName={componentName}
            icon={Icon || Icons.CrossIcon}
            key={key}
            name={name}
          />
        )
      })}
    </Box>
  )
}
