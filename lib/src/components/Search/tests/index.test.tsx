import { screen, waitFor } from '@testing-library/react'

import { AvatarIcon } from '@/Icons'

import { Search } from '../'
import { render } from '../../../../tests'
import { Shape } from '../../Shape'

type Item = {
  poster?: string
  title?: string
}

const results = [
  { poster: 'big-fish.jpg', title: 'Big Fish', year: '2003' },
  { poster: 'wanda.jpg', title: 'A Fish Called Wanda', year: '1988' },
  { poster: 'food-tank.jpg', title: 'Food Tank', year: '2009' }, // Doesn't match 'fish'
  { poster: 'rumble-fish.jpg', title: 'Rumble Fish', year: '1983' },
  { poster: 'cold-fish.jpg', title: 'Cold Fish', year: '2010' },
]

export const opt_group_results = [
  {
    label: 'Good movies',
    options: [
      { poster: 'big-fish.jpg', title: 'Big Fish', year: '2003' },
      { poster: 'wanda.jpg', title: 'A Fish Called Wanda', year: '1988' },
      { poster: 'food-tank.jpg', title: 'Food Tank', year: '2009' }, // Doesn't match 'fish'
    ],
  },
  {
    label: 'Bad movies',
    options: [
      { poster: 'rumble-fish.jpg', title: 'Rumble Fish', year: '1983' },
      { poster: 'cold-fish.jpg', title: 'Cold Fish', year: '2010' },
    ],
  },
]

const defaultProps = {
  itemToString: (item: Item) => item.title,
  renderItem: (item: Item) => (
    <div style={{ alignItems: 'center', display: 'flex' }}>
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

describe('<Search>', () => {
  it('<Search> has default attributes', () => {
    render(<Search dataTestId="search" name="search" {...defaultProps} />)

    const search = screen.getByTestId('search')

    expect(search.getAttribute('placeholder')).toBe('Search…')
    expect(search).toHaveTextContent('')
  })

  it('<Search> shows options when searching', async () => {
    const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

    const search = screen.getByTestId('search')
    await user.type(search, 'fish')

    const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

    expect(options.length).toBe(4)
    expect(options[0]).toHaveTextContent(results[0].title)
  })

  it('<Search> can choose option', async () => {
    const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

    const search = screen.getByTestId('search') as HTMLInputElement

    await user.type(search, 'fish')

    const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

    await user.click(options[1])

    expect(search.value).toEqual(results[1].title)
  })

  it('<Search> calls onChange with correct (object) values', async () => {
    const handleChange = vi.fn()
    const { user } = render(
      <Search dataTestId="search" name="search" {...defaultProps} onChange={handleChange} />
    )

    const search = screen.getByTestId('search')

    await user.type(search, 'fish')

    const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

    await user.click(options[1])

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(
      results[1],
      expect.objectContaining({
        target: { name: 'search', value: results[1] },
      }) // Ignore preventDefault
    )
  })

  it('<Search> formats items', async () => {
    const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

    const search = screen.getByTestId('search')

    await user.type(search, 'fish')

    const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))
    const image = options[0].querySelector('img')

    expect(image.getAttribute('src')).toBe('big-fish.jpg')
  })

  it('<Search icon> shows icon', () => {
    render(
      <Search
        dataTestId="search"
        icon={<AvatarIcon color="neutral-80" dataTestId="avatar" />}
        name="search"
        value="february"
        {...defaultProps}
      />
    )

    const icon = screen.getByTestId('icon-avatar')

    expect(icon).toBeInTheDocument()
  })

  it("<Search> doesn't show list if no results", async () => {
    const { user } = render(<Search dataTestId="search" name="search" {...defaultProps} />)

    const search = screen.getByTestId('search')

    await user.type(search, 'Fish')

    const options = screen.queryByRole('listbox')
    expect(options).toBeNull()
  })

  it('<Search groupsEnabled> shows groups header', async () => {
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

    await user.type(search, 'Fish')

    const headers = await waitFor(() => screen.getAllByTestId('group-header'))

    expect(headers.length).toBe(opt_group_results.length)

    headers.forEach((header, i) => {
      expect(header.querySelector('h4')).toHaveTextContent(opt_group_results[i].label)
      expect(header.querySelector('span')).toHaveTextContent(
        opt_group_results[i].options.length.toString()
      )
    })
  })

  it('<Search> shows options with minChars to 0', async () => {
    const { user } = render(
      <Search dataTestId="search" minChars={0} name="search" {...defaultProps} />
    )

    const search = screen.getByTestId('search')

    await user.click(search)

    const options = await waitFor(() => screen.getByRole('listbox').querySelectorAll('li'))

    expect(options.length).toBe(results.length)
    expect(options[0]).toHaveTextContent(results[0].title)
  })
})
