import React from 'react'
import { Tag } from '@welcome-ui/tag'

import * as S from './styles'

export function multipleSelections(values, handleRemove) {
  return (
    <S.Tags>
      {values.map(tag => (
        <Tag key={tag.value} onRemove={() => handleRemove(tag.value)}>
          {tag.label}
        </Tag>
      ))}
    </S.Tags>
  )
}
