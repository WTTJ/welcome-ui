import React from 'react'
import { Text } from '@welcome-ui/text'

import { slugify } from '../../../utils'

import * as S from './styles'

// eslint-disable-next-line react/prop-types
const Title = ({ children, ...props }) => {
  const slug = slugify(children)

  return (
    <S.Title id={slug} {...props}>
      {children} <S.Link href={`#${slug}`}>#</S.Link>
    </S.Title>
  )
}

export const H1 = props => {
  return <Text m="0" pb="md" pt="3xl" variant="h1" {...props} />
}

export const H2 = props => {
  return <Title pt="3xl" variant="h3" {...props} />
}

export const H3 = props => {
  return <Title pt="xxl" variant="h5" {...props} />
}

export const H4 = props => {
  return <Title pt="lg" variant="h5" {...props} />
}
