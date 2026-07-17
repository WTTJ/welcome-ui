import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Table } from '@/components/Table'

const Example = () => {
  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th className="text-right">Number</Table.Th>
          <Table.Th className="text-center">Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr onClick={() => alert('Row clicked!')}>
          <Table.Td>Consectetur</Table.Td>
          <Table.Td>Lorem ipsum dolor sit amet</Table.Td>
          <Table.Td className="text-right">23</Table.Td>
          <Table.Td className="text-center">
            <Button size="md" variant="tertiary">
              <Icon name="pen" size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr onClick={() => alert('Row clicked!')}>
          <Table.Td>Suspendisse</Table.Td>
          <Table.Td>Pellentesque a maximus magna</Table.Td>
          <Table.Td className="text-right">41</Table.Td>
          <Table.Td className="text-center">
            <Button size="md" variant="tertiary">
              <Icon name="pen" size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  )
}

export default Example
