import React from 'react'

import { Tag } from '../Tag'

import * as S from './styles'

import { SelectOption } from './index'

export function multipleSelections(
  values: SelectOption[],
  handleRemove: (value: string) => void
): React.ReactElement {
  return (
    <S.Tags role="list">
      {values.map(tag => (
        <Tag key={tag.value} onRemove={() => handleRemove(tag.value.toString())} role="listitem">
          {tag.label}
        </Tag>
      ))}
    </S.Tags>
  )
}
