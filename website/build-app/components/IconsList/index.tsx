'use client'
import React from 'react'

import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
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
} from '@/components/Icon/icons'
import type { IconName } from '@/components/Icon/types'
import { Text } from '@/components/Text'
import { Toast, toast } from '@/components/Toast'
import { Tooltip } from '@/components/Tooltip'
import { classNames } from '@/utils'

import styles from './icon-list.styles.scss'

const cx = classNames(styles)

export type IconListProps = {
  collectionName:
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
  isIconsFont?: boolean
}

const handleClickToCopy = (componentName: string) => {
  const component = `<${componentName} />`
  navigator.clipboard.writeText(component)

  toast(
    <Toast.Snackbar variant="success">
      <p>
        <b>{component}</b> copied
      </p>
    </Toast.Snackbar>,
    { position: 'bottom-center' }
  )
}

export const IconsList = ({ collectionName }: IconListProps) => {
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
    <div className="gap-lg grid lg:grid-cols-4 grid-cols-2">
      {iconsByName[collectionName]?.map((name: IconName) => {
        const isSolid = name.endsWith('-solid')
        return (
          <Card
            className={cx('card')}
            key={`${collectionName}-${name}`}
            onClick={() => handleClickToCopy(name)}
          >
            <Icon name={name} size="lg" />
            <Text
              as="span"
              className="pt-md px-sm text-beige-70 text-center break-words flex items-center gap-1"
              lines={2}
              variant="body-md"
            >
              {isSolid ? (
                <Tooltip content="You are seeing the line version of this icon - only available on paid plan">
                  <Icon className="text-secondary-orange" name="exclamation-triangle" size="sm" />
                </Tooltip>
              ) : null}
              {name}
            </Text>
          </Card>
        )
      })}
    </div>
  )
}
