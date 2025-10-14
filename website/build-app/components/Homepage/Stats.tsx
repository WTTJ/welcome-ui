import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text'

const stats = [
  {
    icon: <Icon name="brackets-curly" size="lg" />,
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
    icon: <Icon name="star" size="lg" />,
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
    icon: <Icon name="import" size="lg" />,
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
    <div className="bg-neutral-10 flex justify-between max-w-[29.375rem] md:px-4xl px-xxl py-xxl rounded-2xl w-full">
      {stats?.map(stat => (
        <div className="flex flex-col items-center text-center" key={stat.number}>
          <div className="bg-neutral-90 flex h-[3.4375rem] items-center justify-center rounded-full text-neutral-10 w-[3.4375rem]">
            {stat.icon}
          </div>
          <Text as="span" className="mt-lg" variant="h3">
            {stat.number}
          </Text>
          <Text as="span" className="mt-sm" variant="sm">
            {stat.name}
          </Text>
        </div>
      ))}
    </div>
  )
}
