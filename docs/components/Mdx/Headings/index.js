/* eslint-disable react/no-multi-comp */
import React from 'react'
import { Text } from '@welcome-ui/text'

import { slugify } from '../../../utils'

import * as S from './styles'

// eslint-disable-next-line react/prop-types
function Title({ children, ...props }) {
  const slug = slugify(children)

  return (
    <S.Title id={slug} {...props}>
      {children} <S.Link href={`#${slug}`}>#</S.Link>
    </S.Title>
  )
}

export function H1(props) {
  return <Text m="0" pb="md" pt="3xl" variant="h1" {...props} />
}

export function H2(props) {
  return <Title pt="3xl" variant="h3" {...props} />
}

export function H3(props) {
  return <Title pt="xxl" variant="h5" {...props} />
}

export function H4(props) {
  return <Title pt="lg" variant="h5" {...props} />
}
