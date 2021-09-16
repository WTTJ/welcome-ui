import React from 'react'
import { Tag } from '@welcome-ui/tag'

import * as S from './styles'

export const MultipleSelections = (values, handleRemove) => (
  <S.Tags role="list">
    {values.map(tag => (
      <Tag key={tag.value} onRemove={() => handleRemove(tag.value)} role="listitem">
        {tag.label}
      </Tag>
    ))}
  </S.Tags>
)
