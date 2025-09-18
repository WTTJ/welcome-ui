import { Text } from '@/components/Text'

const Example = () => {
  return (
    <>
      <Text as="p" className="mb-3xl" variant="h3">
        p tag styled as an H3
      </Text>
      <Text as="h1" variant="sm">
        H1 tag styled as a sm
      </Text>
    </>
  )
}

export default Example
