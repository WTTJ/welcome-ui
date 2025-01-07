import { Button, Table } from 'welcome-ui'
import * as React from 'react'
import { SettingsIcon } from '@welcome-ui/icons'

const Example = () => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Number</Table.Th>
          <Table.Th textAlign="center" w={80}>
            Actions
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Consectetur</Table.Td>
          <Table.Td>Lorem ipsum dolor sit amet</Table.Td>
          <Table.Td>23</Table.Td>
          <Table.Td textAlign="center">
            <Button shape="circle" size="sm" variant="secondary">
              <SettingsIcon size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Suspendisse</Table.Td>
          <Table.Td>Pellentesque a maximus magna</Table.Td>
          <Table.Td>41</Table.Td>
          <Table.Td textAlign="center">
            <Button shape="circle" size="sm" variant="secondary">
              <SettingsIcon size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Ullamcorper</Table.Td>
          <Table.Td>Cras viverra ac erat ullamcorper maximus</Table.Td>
          <Table.Td>8</Table.Td>
          <Table.Td textAlign="center">
            <Button shape="circle" size="sm" variant="secondary">
              <SettingsIcon size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  )
}

export default Example
