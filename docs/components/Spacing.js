import React from 'react'
import { withTheme } from '@wttj/xstyled-styled-components'
import { Table } from '@welcome-ui/table'
import { Box } from '@welcome-ui/box'

function Wrapper({ theme }) {
  const space = theme.space

  return (
    <Box>
      <Table mt="xl">
        <Table.Thead>
          <Table.Tr>
            <Table.Th py="md">Name</Table.Th>
            <Table.Th py="md">Space</Table.Th>
            <Table.Th py="md">Pixel</Table.Th>
            <Table.Th py="md" />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {Object.entries(space).map(([key, size]) => (
            <Table.Tr key={key}>
              <Table.Td py="md">{key}</Table.Td>
              <Table.Td py="md">{size}</Table.Td>
              <Table.Td py="md">{Number(size.slice(0, -3)) * 16}px</Table.Td>
              <Table.Td py="md">
                <Box backgroundColor="sub-1" h={20} w={size} />
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Box>
  )
}

export const Spacing = withTheme(Wrapper)
