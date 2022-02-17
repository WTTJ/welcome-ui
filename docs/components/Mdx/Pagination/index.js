import React from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import NextLink from 'next/link'
import { LeftIcon, RightIcon } from '@welcome-ui/icons'

import { useGetPreviousAndNextLinks } from '../../ComponentsList/items'

import * as S from './styles'

export function Pagination() {
  const { next, previous } = useGetPreviousAndNextLinks('getting-started')

  return (
    <Box display="flex" justifyContent="space-between" pt={{ xs: '3xl', md: 70 }} w="100%">
      <Box>
        {previous && (
          <>
            <Text fontWeight="bold" mb="xxs" variant="meta1">
              Previous
            </Text>
            <NextLink href={previous.route} passHref>
              <S.Link>
                <LeftIcon mr="xxs" /> {previous.name}
              </S.Link>
            </NextLink>
          </>
        )}
      </Box>
      <Box textAlign="right">
        {next && (
          <>
            <Text fontWeight="bold" mb="xxs" variant="meta1">
              Next
            </Text>
            <NextLink href={next.route} passHref>
              <S.Link isNext>
                {next.name} <RightIcon ml="xxs" />
              </S.Link>
            </NextLink>
          </>
        )}
      </Box>
    </Box>
  )
}
