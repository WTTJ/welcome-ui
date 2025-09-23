import { screen } from '@testing-library/react'

import { render } from '@tests'

import { Table } from './index'

describe('Table', () => {
  it('renders table with children', () => {
    render(
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Header</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Cell</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Cell')).toBeInTheDocument()
  })

  it('applies indent class when indent prop is true', () => {
    render(
      <Table data-testid="table" indent>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Content</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    )

    expect(screen.getByTestId('table').firstChild).toHaveClass(/indent/)
  })

  describe('Table.Tr', () => {
    it('applies variant class when variant prop is provided', () => {
      render(
        <table>
          <tbody>
            <Table.Tr variant="success">
              <Table.Td>Content</Table.Td>
            </Table.Tr>
          </tbody>
        </table>
      )

      const row = screen.getByRole('row')
      expect(row).toHaveClass(/variant-success/)
    })

    it('applies clickable class when onClick is provided', async () => {
      const handleClick = vi.fn()

      const { user } = render(
        <table>
          <tbody>
            <Table.Tr onClick={handleClick}>
              <Table.Td>Content</Table.Td>
            </Table.Tr>
          </tbody>
        </table>
      )

      const row = screen.getByRole('row')
      expect(row).toHaveClass(/clickable/)

      await user.click(row)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
