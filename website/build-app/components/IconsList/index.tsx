'use client'
import { camelCase, startCase } from 'lodash'
import React from 'react'

import { Box } from '@/Box'
import * as Icons from '@/Icons'
import { IconsFont } from '@/IconsFont'
import { Text } from '@/Text'
import { Toast, toast } from '@/Toast'

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
import * as S from './styles'

export type IconListProps = {
  isIconsFont?: boolean
  name:
    | 'actions'
    | 'arrows'
    | 'avatar'
    | 'brands'
    | 'files'
    | 'flags'
    | 'markdown'
    | 'miscellaneous'
    | 'player'
    | 'table'
    | 'welcome'
    | 'wtf'
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
    actions: actions,
    arrows: arrows,
    avatar: avatar,
    brands: brands,
    files: files,
    flags: flags,
    markdown: markdown,
    miscellaneous: miscellaneous,
    player: player,
    table: table,
    welcome: welcome,
    wtf: wtf,
  }

  return (
    <Box display="grid" gap="lg" gridTemplateColumns={{ lg: '1fr 1fr 1fr 1fr', xs: '1fr 1fr' }}>
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
