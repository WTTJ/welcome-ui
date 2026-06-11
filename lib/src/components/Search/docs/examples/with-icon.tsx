import { Icon } from '@/components/Icon'
import { Search } from '@/components/Search'

type Item = { Title: string }

const Example = () => {
  const searchFunction = async (s: string) => {
    const response = await fetch(`https://www.omdbapi.com?apikey=41514363&s=${s}`)
    const data = await response.json()
    return data.Search
  }

  return (
    <div className="flex flex-col gap-md">
      <h3>Position</h3>
      <Search
        icon={<Icon name="search" />}
        iconPlacement="left"
        itemToString={(item: Item) => item && item.Title}
        name="movies"
        placeholder="Search a movie"
        renderItem={(item: Item) => (
          <div style={{ alignItems: 'center', display: 'flex' }}>{item.Title}</div>
        )}
        search={searchFunction}
      />
      <Search
        icon={<Icon name="search" />}
        iconPlacement="right"
        itemToString={(item: Item) => item && item.Title}
        name="movies"
        placeholder="Search a movie"
        renderItem={(item: Item) => (
          <div style={{ alignItems: 'center', display: 'flex' }}>{item.Title}</div>
        )}
        search={searchFunction}
      />

      <h3>Size</h3>
      <Search
        icon={<Icon name="search" />}
        itemToString={(item: Item) => item && item.Title}
        name="movies"
        placeholder="Search a movie"
        renderItem={(item: Item) => (
          <div style={{ alignItems: 'center', display: 'flex' }}>{item.Title}</div>
        )}
        search={searchFunction}
        size="sm"
      />
      <Search
        icon={<Icon name="search" />}
        itemToString={(item: Item) => item && item.Title}
        name="movies"
        placeholder="Search a movie"
        renderItem={(item: Item) => (
          <div style={{ alignItems: 'center', display: 'flex' }}>{item.Title}</div>
        )}
        search={searchFunction}
        size="md"
      />
      <Search
        icon={<Icon name="search" />}
        itemToString={(item: Item) => item && item.Title}
        name="movies"
        placeholder="Search a movie"
        renderItem={(item: Item) => (
          <div style={{ alignItems: 'center', display: 'flex' }}>{item.Title}</div>
        )}
        search={searchFunction}
        size="lg"
      />
    </div>
  )
}

export default Example
