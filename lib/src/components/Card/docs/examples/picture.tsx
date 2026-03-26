import { Card } from '@/components/Card'
import { Text } from '@/components/Text'

const Example = () => {
  const url =
    'https://m.media-amazon.com/images/M/MV5BMzE0NzgyODIxN15BMl5BanBnXkFtZTgwNDU0NjU5NzE@._V1_SX1777_CR0,0,1777,994_AL_.jpg'

  return (
    <Card
      className={`items-end bg-cover bg-center bg-no-repeat nine:h-7xl nine:max-w-400 flex bg-[url(${url})]`}
    >
      <div className="nine:bg-linear-to-t nine:from-neutral-80 nine:to-neutral-80/0 nine:p-xl nine:w-full">
        <Text as="h4" className="nine:font-bold nine:text-neutral-10 nine:m-0">
          The Jungle Book
        </Text>
      </div>
    </Card>
  )
}

export default Example
