import React from 'react'
import { fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Icon } from '@welcome-ui/icon'
import { Shape } from '@welcome-ui/shape'

import { render } from '../../../utils/tests'
import { Search } from '../src'

type Item = {
  poster?: string
  title?: string
}

const results = [
  { title: 'Big Fish', year: '2003', poster: 'big-fish.jpg' },
  { title: 'A Fish Called Wanda', year: '1988', poster: 'wanda.jpg' },
  { title: 'Food Tank', year: '2009', poster: 'food-tank.jpg' }, // Doesn't match 'fish'
  { title: 'Rumble Fish', year: '1983', poster: 'rumble-fish.jpg' },
  { title: 'Cold Fish', year: '2010', poster: 'cold-fish.jpg' },
]

export const opt_group_results = [
  {
    label: 'Good movies',
    options: [
      { title: 'Big Fish', year: '2003', poster: 'big-fish.jpg' },
      { title: 'A Fish Called Wanda', year: '1988', poster: 'wanda.jpg' },
      { title: 'Food Tank', year: '2009', poster: 'food-tank.jpg' }, // Doesn't match 'fish'
    ],
  },
  {
    label: 'Bad movies',
    options: [
      { title: 'Rumble Fish', year: '1983', poster: 'rumble-fish.jpg' },
      { title: 'Cold Fish', year: '2010', poster: 'cold-fish.jpg' },
    ],
  },
]

const defaultProps = {
  itemToString: (item: Item) => item.title,
  renderItem: (item: Item) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Shape mr="xs" w="20px">
        <img src={item.poster} />
      </Shape>
      <span>{item.title}</span>
    </div>
  ),
  search: async function asyncSearch(q: string) {
    await new Promise(resolve => setTimeout(resolve, 100))
    return results.filter(result => result.title.toLowerCase().indexOf(q) > -1)
  },
}

test('<Search> has default attributes', () => {
  const { getByTestId } = render(<Search dataTestId="search" name="search" {...defaultProps} />)
  const search = getByTestId('search')
  expect(search.getAttribute('placeholder')).toBe('Search…')
  expect(search).toHaveTextContent('')
})

test('<Search> shows options when searching', async () => {
  const { getByRole, getByTestId } = render(
    <Search dataTestId="search" name="search" {...defaultProps} />
  )

  const search = getByTestId('search')
  await userEvent.type(search, 'fish')

  const options = await waitFor(() => getByRole('listbox').querySelectorAll('li'))
  expect(options.length).toBe(4)
  expect(options[0]).toHaveTextContent(results[0].title)
})

test('<Search> can choose option', async () => {
  const { getByRole, getByTestId } = render(
    <Search dataTestId="search" name="search" {...defaultProps} />
  )

  const search = getByTestId('search') as HTMLInputElement
  await userEvent.type(search, 'fish')

  const options = await waitFor(() => getByRole('listbox').querySelectorAll('li'))
  fireEvent.click(options[1])

  expect(search.value).toEqual(results[1].title)
})

test('<Search> calls onChange with correct (object) values', async () => {
  const handleChange = jest.fn()
  const { getByRole, getByTestId } = render(
    <Search dataTestId="search" name="search" {...defaultProps} onChange={handleChange} />
  )

  const search = getByTestId('search')
  await userEvent.type(search, 'fish')

  const options = await waitFor(() => getByRole('listbox').querySelectorAll('li'))
  fireEvent.click(options[1])

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    results[1],
    expect.objectContaining({
      target: { name: 'search', value: results[1] },
    }) // Ignore preventDefault
  )
})

test('<Search> formats items', async () => {
  const { getByRole, getByTestId } = render(
    <Search dataTestId="search" name="search" {...defaultProps} />
  )

  const search = getByTestId('search')
  await userEvent.type(search, 'fish')

  const options = await waitFor(() => getByRole('listbox').querySelectorAll('li'))
  const image = options[0].querySelector('img')

  expect(image.getAttribute('src')).toBe('big-fish.jpg')
})

test.skip('<Search icon> shows icon', () => {
  const { container } = render(
    <Search
      dataTestId="search"
      icon={<Icon color="light-100" name="avatar" />}
      name="search"
      value="february"
      {...defaultProps}
    />
  )

  const icon = container.querySelector('[title="avatar"]')
  expect(icon).toBeInTheDocument()
})

test("<Search> doesn't show list if no results", async () => {
  const { getByTestId, queryByRole } = render(
    <Search dataTestId="search" name="search" {...defaultProps} />
  )

  const search = getByTestId('search')
  await userEvent.type(search, 'Fish')

  const options = queryByRole('listbox')
  expect(options).toBeNull()
})

test('<Search groupsEnabled> shows groups header', async () => {
  const { getAllByTestId, getByTestId } = render(
    <Search
      dataTestId="select"
      groupsEnabled
      name="search"
      renderGroupHeader={({ label, options }) => (
        <div data-testid="group-header">
          <h4>{label}</h4>
          <span>{options.length}</span>
        </div>
      )}
      {...defaultProps}
      search={() => Promise.resolve(opt_group_results)}
    />
  )

  const search = getByTestId('select')
  await userEvent.type(search, 'fish')

  const headers = await waitFor(() => getAllByTestId('group-header'))

  expect(headers.length).toBe(opt_group_results.length)

  headers.forEach((header, i) => {
    expect(header.querySelector('h4')).toHaveTextContent(opt_group_results[i].label)
    expect(header.querySelector('span')).toHaveTextContent(
      opt_group_results[i].options.length.toString()
    )
  })
})

test('<Search> shows options with minChars to 0', async () => {
  const { getByRole, getByTestId } = render(
    <Search dataTestId="search" minChars={0} name="search" {...defaultProps} />
  )

  const search = getByTestId('search')
  await userEvent.click(search)

  const options = await waitFor(() => getByRole('listbox').querySelectorAll('li'))
  expect(options.length).toBe(results.length)
  expect(options[0]).toHaveTextContent(results[0].title)
})
