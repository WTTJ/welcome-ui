'use client'

import React from 'react'

import { Card } from '@/components/Card'
import { Icon } from '@/components/Icon'
import {
  actions,
  arrows,
  brands,
  flags,
  foldersAndFiles,
  markdown,
  miscellaneous,
  player,
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
    | 'brands'
    | 'flags'
    | 'foldersAndFiles'
    | 'markdown'
    | 'miscellaneous'
    | 'player'
    | 'welcome'
    | 'wtf'
  isIconsFont?: boolean
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

const paidOrCustomIcons = [
  'arrows-merge-v',
  'resize-handle',
  'move-arrow',
  'npm',
  'pinterest',
  'stackoverflow',
  'twitch',
  'xing',
  'zapier',
  'quote',
  'heading',
  'heading-1',
  'heading-2',
  'heading-3',
  'heading-4',
  'heading-5',
  'heading-6',
  'flag',
  'clipboard-check',
  'pin',
  'user-search',
  'birthday-cake',
  'bunting-flags',
  'certified',
  'screen-share',
  'stop-screen-share',
  'cast',
  'cast-connected',
  'cast-unavailable',
  'playlist',
  'crown',
  'industry',
  'fingerprint',
  'flag',
  'flag-solid',
  'handshake',
  'hashtag',
  'leaf',
  'masonry',
  'masonry-solid',
  'masonry-plus',
  'sparkles',
  'sofa',
  'symbol',
  'wttj',
  'flag-fr',
  'flag-en',
  'flag-us',
]

export const IconsList = ({ collectionName }: IconListProps) => {
  const iconsByName = {
    actions: actions,
    arrows: arrows,
    brands: brands,
    flags: flags,
    foldersAndFiles: foldersAndFiles,
    markdown: markdown,
    miscellaneous: miscellaneous,
    player: player,
    welcome: welcome,
    wtf: wtf,
  }

  return (
    <div className="gap-lg grid lg:grid-cols-4 grid-cols-2">
      {iconsByName[collectionName]?.map((name: IconName) => {
        const isSolid = name.endsWith('-solid')
        const isPaidOrCustom = isSolid || paidOrCustomIcons.includes(name)
        const tooltipContent =
          (isSolid &&
            'You are seeing the line version of this icon - solid version is only available on paid plan') ||
          (isPaidOrCustom && "Icon not available because it comes from welcome's private icons")
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
              {isPaidOrCustom ? (
                <Tooltip content={tooltipContent}>
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
