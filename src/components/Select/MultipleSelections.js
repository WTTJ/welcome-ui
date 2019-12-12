import React from 'react'

import { Tag } from '../Tag'

import * as S from './styles'

export const MultipleSelections = (values, handleRemove) => (
  <S.Tags>
    {values.map(tag => (
      <Tag key={tag.value} onRemove={() => handleRemove(tag.value)}>
        {tag.label}
      </Tag>
    ))}
  </S.Tags>
)
