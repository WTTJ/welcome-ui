import React from 'react'

import { classNames } from '@/utils/classNames'
import { Tag } from '@old/Tag'

import selectStyles from './select.module.scss'

import type { SelectOption } from './index'

const cx = classNames(selectStyles)

export function multipleSelections(
  values: SelectOption[],
  handleRemove: (value: string) => void
): React.ReactElement {
  return (
    <div className={cx('tags')} role="list">
      {values.map(tag => (
        // TODO migrate after WUI-187/tag
        <Tag
          className={cx('styled-tag')}
          key={tag.value}
          onRemove={() => handleRemove(tag.value.toString())}
          role="listitem"
        >
          {tag.label}
        </Tag>
      ))}
    </div>
  )
}
