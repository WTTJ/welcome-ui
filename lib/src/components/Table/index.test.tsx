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

  it('does not apply the withColumnDivider class by default', () => {
    render(
      <Table>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Cell</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    )

    const contentWrapper = screen.getByRole('table').parentElement
    expect(contentWrapper).not.toHaveClass(/withColumnDivider/)
  })

  it('applies the withColumnDivider class when withColumnDivider is true', () => {
    render(
      <Table withColumnDivider>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Cell</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
    )

    const contentWrapper = screen.getByRole('table').parentElement
    expect(contentWrapper).toHaveClass(/withColumnDivider/)
  })

  describe('Table.Tr', () => {
    it('sets data-clickable to false when onClick is not provided', () => {
      render(
        <table>
          <tbody>
            <Table.Tr>
              <Table.Td>Content</Table.Td>
            </Table.Tr>
          </tbody>
        </table>
      )

      const row = screen.getByRole('row')
      expect(row).toHaveAttribute('data-clickable', 'false')
    })

    it('sets data-clickable to true and calls onClick when onClick is provided', async () => {
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
      expect(row).toHaveAttribute('data-clickable', 'true')

      await user.click(row)
      expect(handleClick).toHaveBeenCalledTimes(1)
    })
  })
})
