import React from 'react'
import { act, screen, waitFor } from '@testing-library/react'
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
  render(<Search dataTestId="search" name="search" {...defaultProps} />)

  const search = screen.getByTestId('search')

  expect(search.getAttribute('placeholder')).toBe('Search…')
  expect(search).toHaveTextContent('')
})

test('<Search> shows options when searching', async () => {
  const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

  const search = screen.getByTestId('search')
  await act(() => user.type(search, 'fish'))

  const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

  expect(options.length).toBe(4)
  expect(options[0]).toHaveTextContent(results[0].title)
})

test('<Search> can choose option', async () => {
  const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

  const search = screen.getByTestId('search') as HTMLInputElement

  await act(() => user.type(search, 'fish'))

  const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

  await act(() => user.click(options[1]))

  expect(search.value).toEqual(results[1].title)
})

test('<Search> calls onChange with correct (object) values', async () => {
  const handleChange = jest.fn()
  const { user } = render(
    <Search dataTestId="search" name="search" {...defaultProps} onChange={handleChange} />
  )

  const search = screen.getByTestId('search')

  await act(() => user.type(search, 'fish'))

  const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

  await act(() => user.click(options[1]))

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toHaveBeenCalledWith(
    results[1],
    expect.objectContaining({
      target: { name: 'search', value: results[1] },
    }) // Ignore preventDefault
  )
})

test('<Search> formats items', async () => {
  const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

  const search = screen.getByTestId('search')

  await act(() => user.type(search, 'fish'))

  const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))
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
  const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

  const search = screen.getByTestId('search')

  await act(() => user.type(search, 'Fish'))

  const options = screen.queryByRole('listbox')
  expect(options).toBeNull()
})

test('<Search groupsEnabled> shows groups header', async () => {
  const { user } = render(
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

  const search = screen.getByTestId('select')

  await act(() => user.type(search, 'Fish'))

  const headers = await waitFor(() => screen.getAllByTestId('group-header'))

  expect(headers.length).toBe(opt_group_results.length)

  headers.forEach((header, i) => {
    expect(header.querySelector('h4')).toHaveTextContent(opt_group_results[i].label)
    expect(header.querySelector('span')).toHaveTextContent(
      opt_group_results[i].options.length.toString()
    )
  })
})

test('<Search> shows options with minChars to 0', async () => {
  const { user } = render(
    <Search dataTestId="search" minChars={0} name="search" {...defaultProps} />
  )

  const search = screen.getByTestId('search')

  await act(() => user.click(search))

  const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

  expect(options.length).toBe(results.length)
  expect(options[0]).toHaveTextContent(results[0].title)
})
