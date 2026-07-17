import { useState } from 'react'

import { Button } from '@/components/Button'
import { Checkbox } from '@/components/Checkbox'
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
  const [selected, setSelected] = useState<number[]>([])

  const toggleAll = () => {
    if (selected.length === DATA.length) {
      setSelected([])
    } else {
      setSelected(DATA.map(({ id }) => id))
    }
  }

  const selectRow = (id: number) => {
    if (selected.includes(id)) {
      setSelected(selected.filter(prevId => prevId !== id))
    } else {
      setSelected([...selected, id])
    }
  }

  const checkAllState = DATA.length === selected.length
  const isIndeterminate = selected.length > 0 && selected.length < DATA.length

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <Checkbox
              checked={checkAllState}
              indeterminate={isIndeterminate}
              onChange={toggleAll}
            />
          </Table.Th>
          <Table.Th>Name</Table.Th>
          <Table.Th>Job</Table.Th>
          <Table.Th className="text-right">Score</Table.Th>
          <Table.Th className="text-center">Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        {DATA.map(({ id, job, name, score }) => {
          const checked = selected.includes(id)

          return (
            <Table.Tr aria-selected={checked}>
              <Table.Td>
                <Checkbox checked={checked} onChange={() => selectRow(id)} />
              </Table.Td>

              <Table.Td>{name}</Table.Td>
              <Table.Td>{job}</Table.Td>
              <Table.Td>{score}</Table.Td>

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
