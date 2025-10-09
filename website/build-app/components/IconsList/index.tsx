'use client'
import React from 'react'

import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'
import { Toast, toast } from '@/components/Toast'
import { classNames } from '@/utils'

import styles from './icon-list.styles.scss'
import {
  actions,
  arrows,
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

const cx = classNames(styles)

export type IconListProps = {
  isIconsFont?: boolean
  name:
    | 'actions'
    | 'arrows'
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
  const component = `<Icon name="${componentName}" />`
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

export const IconsList = ({ name }: IconListProps) => {
  const iconsByName = {
    actions: actions,
    arrows: arrows,
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
      {iconsByName[name]?.map(name => {
        return (
          <Card className={cx('card')} key={name} onClick={() => handleClickToCopy(name)}>
            <Icon name={name} size="lg" />
            <Text
              as="span"
              className="pt-md px-sm text-beige-70 text-center break-words"
              lines={2}
              variant="sm"
            >
              {name}
            </Text>
          </Card>
        )
      })}
    </div>
  )
}
