import React from 'react'

import { Tag } from '@/components/Tag'
import { classNames } from '@/utils/classNames'

import selectStyles from './select.module.scss'
import type { SelectOption } from './types'

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
