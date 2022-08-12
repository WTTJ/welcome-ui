import React from 'react'
import { Text } from '@welcome-ui/text'
import { Table } from '@welcome-ui/table'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'

import { Pagination } from './Pagination'
import { H1, H2, H3, H4 } from './Headings'
import { Code } from './Code'
import { InlineCode } from './InlineCode'
import { Pre } from './Pre'
import { Dependencies } from './Dependencies'
import { Props } from './Props'
import { Showcase } from './Showcase'

export const MDXComponents = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
  h4: props => <H4 {...props} />,
  box: props => <Box {...props} />,
  inlineCode: props => <InlineCode {...props} />,
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
    <Box as="div" mb="sm">
      <Box as="ul" mb="0" mt="md" {...props} />
    </Box>
  ),
  ol: props => (
    <Box as="div" mb="sm">
      <Box as="ol" mb="0" mt="md" {...props} />
    </Box>
  ),
  li: props => <Box as="li" pb={4} {...props} />,
  dependencies: Dependencies,
  props: Props,
  showcase: Showcase,
  pagination: Pagination,
}
