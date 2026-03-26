import { CodeBlockIcon, DownloadIcon, StarIcon } from '@/components/Icon'
import { Text } from '@/components/Text'

const stats = [
  {
    icon: <CodeBlockIcon size="lg" />,
    name: (
      <>
        Amazing
        <br />
        components
      </>
    ),
    number: '50+',
  },
  {
    icon: <StarIcon size="lg" />,
    name: (
      <>
        Github
        <br />
        stars
      </>
    ),
    number: '600+',
  },
  {
    icon: <DownloadIcon size="lg" />,
    name: (
      <>
        Weekly
        <br />
        Downloads
      </>
    ),
    number: '450+',
  },
]

export const Stats = () => {
  return (
    <div className="nine:bg-neutral-10 nine:flex nine:justify-between nine:max-w-[29.375rem] nine:md:px-4xl nine:px-xxl nine:py-xxl nine:rounded-2xl nine:w-full">
      {stats?.map(stat => (
        <div
          className="nine:flex nine:flex-col nine:items-center nine:text-center"
          key={stat.number}
        >
          <div className="nine:bg-neutral-90 nine:flex nine:h-[3.4375rem] nine:items-center nine:justify-center nine:rounded-full nine:text-neutral-10 nine:w-[3.4375rem]">
            {stat.icon}
          </div>
          <Text as="span" className="nine:mt-lg" variant="h3">
            {stat.number}
          </Text>
          <Text as="span" className="nine:mt-sm" variant="sm">
            {stat.name}
          </Text>
        </div>
      ))}
    </div>
  )
}
