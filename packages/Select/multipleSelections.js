import React from 'react'
import { Tag } from '@welcome-ui/tag'

import * as S from './styles'

export function multipleSelections(values, handleRemove) {
  return (
    <S.Tags role="list">
      {values.map(tag => (
        <Tag key={tag.value} onRemove={() => handleRemove(tag.value)} role="listitem">
          {tag.label}
        </Tag>
      ))}
    </S.Tags>
  )
}
