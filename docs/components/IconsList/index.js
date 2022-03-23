/* eslint-disable react/prop-types */
import React from 'react'
import { Icons as FontIcons } from '@welcome-ui/icons.font'
import * as Icons from '@welcome-ui/icons'
import { Box } from '@welcome-ui/box'

import { toPascalCase } from '../../../utils/strings'

import { Item } from './Item'
import {
  actions,
  arrows,
  avatar,
  brands,
  files,
  flags,
  markdown,
  miscellaneous,
  player,
  table,
  wtf,
} from './icons'

export function IconsList({ isIconFont, name }) {
  const iconsByName = {
    arrows: arrows,
    actions: actions,
    miscellaneous: miscellaneous,
    player: player,
    avatar: avatar,
    wtf: wtf,
    files: files,
    markdown: markdown,
    table: table,
    brands: brands,
    flags: flags,
  }

  return (
    <Box display="grid" gap="lg" gridTemplateColumns={{ xs: '1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr' }}>
      {iconsByName[name]?.map(key => {
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
