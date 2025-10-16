import { Search } from '@/components/Search'
import { Tag } from '@/components/Tag'
import { Text } from '@/components/Text'

type Acc = { movies: Item[]; series: Item[] }

type Item = { Title: string; Type: 'movie' | 'serie' }

const Example = () => {
  const searchFunction = async (s: string) => {
    const response = await fetch(`https://www.omdbapi.com?apikey=41514363&s=${s}`)
    const data = await response.json()
    const searchResults = (data.Search || []).reduce(
      (acc: Acc, item: Item) => {
        if (item.Type === 'movie') {
          acc.movies.push(item)
        } else {
          acc.series.push(item)
        }
        return acc
      },
      { movies: [], series: [] }
    )

    return [
      { label: 'Movies', options: searchResults.movies },
      { label: 'Series', options: searchResults.series },
    ]
  }

  return (
    <Search
      groupsEnabled
      itemToString={(item: Item) => item && item.Title}
      name="movies"
      placeholder="Search a movie"
      renderGroupHeader={({ label, options }) => (
        <div className="p-var(--space-xxs)">
          <div className="flex justify-between items-center">
            <Text className="m-0" variant="lg">
              {label}
            </Text>
            <Tag>{options.length}</Tag>
          </div>
          {options.length === 0 && <Text>No results found</Text>}
        </div>
      )}
      renderItem={(item: Item) => (
        <div style={{ alignItems: 'center', display: 'flex' }}>{item.Title}</div>
      )}
      search={searchFunction}
    />
  )
}

export default Example
