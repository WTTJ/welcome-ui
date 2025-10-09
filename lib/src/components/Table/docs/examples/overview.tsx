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
          <Table.Th>Number</Table.Th>
          <Table.Th className="text-center w-[80px]">Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Consectetur</Table.Td>
          <Table.Td>Lorem ipsum dolor sit amet</Table.Td>
          <Table.Td>23</Table.Td>
          <Table.Td className="text-center">
            <Button size="sm" variant="primary-neutral">
              <Icon name="setting" size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Suspendisse</Table.Td>
          <Table.Td>Pellentesque a maximus magna</Table.Td>
          <Table.Td>41</Table.Td>
          <Table.Td className="text-center">
            <Button size="sm" variant="primary-neutral">
              <Icon name="setting" size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Ullamcorper</Table.Td>
          <Table.Td>Cras viverra ac erat ullamcorper maximus</Table.Td>
          <Table.Td>8</Table.Td>
          <Table.Td className="text-center">
            <Button size="sm" variant="primary-neutral">
              <Icon name="setting" size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  )
}

export default Example
