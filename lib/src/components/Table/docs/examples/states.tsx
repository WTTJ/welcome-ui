import { Button } from '@/components/Button'
import { SettingsIcon } from '@/components/Icon'
import { Table } from '@/components/Table'

const Example = () => {
  return (
    <Table indent>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Name</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Number</Table.Th>
          <Table.Th className="text-right">Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr variant="danger">
          <Table.Td>Consectetur</Table.Td>
          <Table.Td>Lorem ipsum dolor sit amet</Table.Td>
          <Table.Td>23</Table.Td>
          <Table.Td className="text-right">
            <Button shape="circle" size="sm" variant="secondary">
              <SettingsIcon size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr variant="warning">
          <Table.Td>Suspendisse</Table.Td>
          <Table.Td>Pellentesque a maximus magna</Table.Td>
          <Table.Td>41</Table.Td>
          <Table.Td className="text-right">
            <Button shape="circle" size="sm" variant="secondary">
              <SettingsIcon size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr variant="info">
          <Table.Td>Ullamcorper</Table.Td>
          <Table.Td>Cras viverra ac erat ullamcorper maximus</Table.Td>
          <Table.Td>8</Table.Td>
          <Table.Td className="text-right">
            <Button shape="circle" size="sm" variant="secondary">
              <SettingsIcon size="sm" />
            </Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr variant="success">
          <Table.Td>Vestibulum</Table.Td>
          <Table.Td>Aliquam erat volutpat</Table.Td>
          <Table.Td>102</Table.Td>
          <Table.Td className="text-right">
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
