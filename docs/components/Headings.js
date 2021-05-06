/* eslint-disable react/no-multi-comp */
import React from 'react'
import { Text } from '@welcome-ui/text'

import { slugify } from '../utils'

import * as S from './Headings.styled'

// eslint-disable-next-line react/prop-types
const Title = ({ children, ...props }) => {
  const slug = slugify(children)
  return (
    <S.Title id={slug} {...props}>
      {children} <S.Link href={`#${slug}`}>#</S.Link>
    </S.Title>
  )
}

export const H1 = props => <Text m="0" mb={50} variant="h1" {...props} />
export const H2 = props => (
  <Title
    as="h2"
    borderBottom="1px solid"
    borderBottomColor="nude.500"
    mb="xxl"
    mt={50}
    pb="lg"
    variant="h3"
    {...props}
  />
)
export const H3 = props => <Title as="h3" mb="lg" mt="xl" variant="h4" {...props} />
