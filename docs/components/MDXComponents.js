/* eslint-disable react/prop-types */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react'
import { Text } from '@welcome-ui/text'
import { Table } from '@welcome-ui/table'
import { Link } from '@welcome-ui/link'
import { Box } from '@welcome-ui/box'

import { H1, H2, H3 } from './Headings'
import { Code } from './Code'
import { InlineCode } from './InlineCode'
import { Pre } from './Pre'
import { TagVersion } from './TagVersion'
import { Dependencies } from './Dependencies'
import { Usage } from './Usage'
import { Props } from './Props'

export const MDXComponents = {
  h1: props => <H1 {...props} />,
  h2: props => <H2 {...props} />,
  h3: props => <H3 {...props} />,
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
  p: props => <Text as="p" lineHeight="1.5" mb="0" mt="sm" {...props} />,
  strong: props => <Box as="strong" fontWeight="bold" {...props} />,
  li: props => <Box as="li" pb={4} {...props} />,
  tagversion: TagVersion,
  dependencies: Dependencies,
  usage: Usage,
  props: Props
}
