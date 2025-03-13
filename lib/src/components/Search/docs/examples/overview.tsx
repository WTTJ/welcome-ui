import { Search } from '@/Search'

type Item = { Title: string }

const Example = () => {
  const searchFunction = async (s: string) => {
    const response = await fetch(`https://www.omdbapi.com?apikey=41514363&s=${s}`)
    const data = await response.json()
    return data.Search
  }

  return (
    <Search
      itemToString={(item: Item) => item && item.Title}
      name="movies"
      placeholder="Search a movie"
      renderItem={(item: Item) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>{item.Title}</div>
      )}
      search={searchFunction}
    />
  )
}

export default Example
