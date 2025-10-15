import { Text } from '@/components/Text'

const Example = () => {
  return (
    <>
      <Text as="h3" className="mb-3xl" variant="display-sm">
        h3 styled as a display-sm
      </Text>
      <Text as="h1" variant="body-md">
        H1 tag styled as a body-md
      </Text>
    </>
  )
}

export default Example
