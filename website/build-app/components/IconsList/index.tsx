'use client'
import React from 'react'
import { Icons as IconsFont } from '@welcome-ui/icons.font'
import * as Icons from '@welcome-ui/icons'
import { Box } from '@welcome-ui/box'
import { camelCase, startCase } from 'lodash'
import { Text } from '@welcome-ui/text'
import { Card } from '@welcome-ui/card'
import { Toast, toast } from '@welcome-ui/toast'
import styled from '@xstyled/styled-components'

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

export type IconListProps = {
  isIconFont?: boolean
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

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: xl;
  color: dark-900;
  border-radius: xl;
  cursor: pointer;

  &,
  & span {
    transition: medium;
  }

  &:hover {
    border-color: dark-900;
    span {
      color: dark-900;
    }
  }
`

export const IconsList = ({ isIconFont, name }: IconListProps) => {
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
    <Box display="grid" gap="lg" gridTemplateColumns={{ xs: '1fr 1fr', lg: '1fr 1fr 1fr 1fr' }}>
      {iconsByName[name]?.map(key => {
        const name = startCase(camelCase(key)).replace(/ /g, '')
        const componentName = isIconFont ? `Icons.${name}` : `${name}Icon`
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const Icon = isIconFont ? IconsFont[name] : Icons[componentName]

        if (!Icon) {
          // eslint-disable-next-line no-console
          console.error(`The "${key}" icon is missing`)
        }

        return (
          <StyledCard key={key} onClick={() => handleClickToCopy(componentName)}>
            {Icon ? <Icon size="lg" /> : <Icons.CrossIcon size="lg" />}
            <Text
              as="span"
              color="nude-700"
              lines={2}
              pt="md"
              px="sm"
              style={{ wordBreak: 'break-word' }}
              textAlign="center"
              variant="sm"
            >
              {componentName}
            </Text>
          </StyledCard>
        )
      })}
    </Box>
  )
}
