import React from 'react'
import { Text } from '@welcome-ui/text'
import { Table } from '@welcome-ui/table'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'

import { Pagination } from './Pagination'
import { H1, H2, H3, H4 } from './Headings'
import { Code } from './Code'
import { Pre } from './Pre'
import { Dependencies } from './Dependencies'
import { Props } from './Props'
import { Showcase } from './Showcase'

export const MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  code: Code,
  pre: Pre,
  table: Table,
  th: Table.Th,
  td: Table.Td,
  tr: Table.Tr,
  tbody: Table.Tbody,
  a: ({ href, ...props }) => <Link href={href} {...props} />,
  p: props => <Text as="p" lineHeight="1.5" pt="lg" {...props} />,
  strong: props => <Box as="strong" fontWeight="bold" {...props} />,
  ul: props => (
    <Box as="p" mb="xxs">
      <Box as="ul" mb="0" mt="md" {...props} />
    </Box>
  ),
  ol: props => (
    <Box as="p" mb="xxs">
      <Box as="ol" mb="0" mt="md" {...props} />
    </Box>
  ),
  li: props => <Box as="li" pb={4} {...props} />,
  Dependencies: Dependencies,
  Props: Props,
  Showcase: Showcase,
  Pagination: Pagination,
}
