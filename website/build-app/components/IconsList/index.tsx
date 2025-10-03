'use client'
import { camelCase, startCase } from 'lodash'
import React from 'react'

import { Card } from '@/components/Card'
import * as Icons from '@/components/Icon'
import { Text } from '@/components/Text'
import { Toast, toast } from '@/components/Toast'
import { classNames } from '@/utils'

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
import styles from './styles.scss'

const cx = classNames(styles)

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

export const IconsList = ({ name }: IconListProps) => {
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
      {iconsByName[name]?.map(key => {
        const name = startCase(camelCase(key)).replace(/ /g, '')
        const componentName = `${name}Icon`

        const Icon = Icons[componentName as keyof typeof Icons]

        if (!Icon) {
          // eslint-disable-next-line no-console
          console.error(`The "${key}" icon is missing`)
        }

        return (
          <Card className={cx('card')} key={key} onClick={() => handleClickToCopy(componentName)}>
            {Icon ? <Icon size="lg" /> : <Icons.CrossIcon size="lg" />}
            <Text
              as="span"
              className="pt-md px-sm text-beige-70 text-center break-words"
              lines={2}
              variant="sm"
            >
              {componentName}
            </Text>
          </Card>
        )
      })}
    </div>
  )
}
