import * as React from 'react'
import { Search } from '@welcome-ui/search'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Tag } from '@welcome-ui/tag'

type Item = { Title: string; Type: 'movie' | 'serie' }

type Acc = { movies: Item[]; series: Item[] }

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
    // TODO: fix typescript
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Search
      groupsEnabled
      itemToString={(item: Item) => item && item.Title}
      name="movies"
      placeholder="Search a movie"
      renderGroupHeader={({ label, options }) => (
        <Box p="xxs">
          <Box alignItems="center" display="flex" justifyContent="space-between">
            <Text m="0" variant="lg">
              {label}
            </Text>
            <Tag>{options.length}</Tag>
          </Box>
          {options.length === 0 && <Text>No results found</Text>}
        </Box>
      )}
      renderItem={(item: Item) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>{item.Title}</div>
      )}
      search={searchFunction}
      w="100%"
    />
  )
}

export default Example
