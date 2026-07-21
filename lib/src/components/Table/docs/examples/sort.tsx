import { useState } from 'react'

import { Button } from '@/components/Button'
import { Icon } from '@/components/Icon'
import { Table } from '@/components/Table'

const DATA = [
  {
    id: 1,
    job: 'Assistant Manager',
    name: 'Francklyn Sired',
    score: 42,
  },
  {
    id: 2,
    job: 'Safety Technician III',
    name: 'Vannie Corrie',
    score: 40,
  },
  {
    id: 3,
    job: 'Technical Writer',
    name: 'Kain Dunning',
    score: 31,
  },
]

const Example = () => {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const toggleSort = () => {
    setSortOrder(prevSortOrder => (prevSortOrder === 'asc' ? 'desc' : 'asc'))
  }

  const sortedData = [...DATA].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name > b.name ? 1 : -1
    }

    return a.name < b.name ? 1 : -1
  })

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th className="flex gap-sm">
            Name
            <Icon
              className="cursor-pointer"
              name={sortOrder === 'asc' ? 'arrow-down' : 'arrow-up'}
              onClick={toggleSort}
            />
          </Table.Th>
          <Table.Th>Job</Table.Th>
          <Table.Th className="text-right">Score</Table.Th>
          <Table.Th className="text-center">Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {sortedData.map(({ job, name, score }) => {
          return (
            <Table.Tr>
              <Table.Td>{name}</Table.Td>
              <Table.Td>{job}</Table.Td>
              <Table.Td className="text-right">{score}</Table.Td>

              <Table.Td className="text-center">
                <Button size="md" variant="tertiary">
                  <Icon name="pen" size="sm" />
                </Button>
              </Table.Td>
            </Table.Tr>
          )
        })}
      </Table.Tbody>
    </Table>
  )
}

export default Example
