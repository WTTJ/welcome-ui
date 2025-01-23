'use client'
import { IconsFont } from 'welcome-ui/IconsFont'
import * as Icons from 'welcome-ui/Icons'
import { Box } from 'welcome-ui/Box'
import { Text } from 'welcome-ui/Text'
import { Toast, toast } from 'welcome-ui/Toast'
import React from 'react'
import { camelCase, startCase } from 'lodash'

import * as S from './styles'
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
  welcome,
  wtf,
} from './icons'

export type IconListProps = {
  isIconsFont?: boolean
  name:
    | 'arrows'
    | 'actions'
    | 'miscellaneous'
    | 'player'
    | 'avatar'
    | 'wtf'
    | 'files'
    | 'markdown'
    | 'table'
    | 'brands'
    | 'welcome'
    | 'flags'
}

const handleClickToCopy = (componentName: string) => {
  const component = `<${componentName} />`
  navigator.clipboard.writeText(component)

  toast(
    <Toast.Snackbar>
      <p>
        <b>{component}</b> copied to your clipboard
      </p>
    </Toast.Snackbar>,
    { position: 'bottom-center' }
  )
}

export const IconsList = ({ isIconsFont, name }: IconListProps) => {
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
    welcome: welcome,
    flags: flags,
  }

  return (
    <Box display="grid" gap="lg" gridTemplateColumns={{ xs: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}>
      {iconsByName[name]?.map(key => {
        const name = startCase(camelCase(key)).replace(/ /g, '')
        const componentName = isIconsFont ? `IconsFont.${name}` : `${name}Icon`

        const Icon = isIconsFont
          ? IconsFont[name as keyof typeof IconsFont]
          : Icons[componentName as keyof typeof Icons]

        if (!Icon) {
          // eslint-disable-next-line no-console
          console.error(`The "${key}" icon is missing`)
        }

        return (
          <S.StyledCard key={key} onClick={() => handleClickToCopy(componentName)}>
            {Icon ? <Icon size="lg" /> : <Icons.CrossIcon size="lg" />}
            <Text
              as="span"
              color="beige-70"
              lines={2}
              pt="md"
              px="sm"
              style={{ wordBreak: 'break-word' }}
              textAlign="center"
              variant="sm"
            >
              {componentName}
            </Text>
          </S.StyledCard>
        )
      })}
    </Box>
  )
}
