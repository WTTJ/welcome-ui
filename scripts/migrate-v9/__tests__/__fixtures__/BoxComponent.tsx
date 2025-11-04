import { Box } from 'welcome-ui/Box'

export const BoxComponent = () => {
  return (
    <div>
      <Box backgroundColor="primary-500" display="flex" mt="lg">
        Main content
      </Box>
      <Box border="1px solid" borderColor="neutral-200" borderRadius="sm" p="md">
        Card content
      </Box>
      <Box as="section" maxWidth="container" mx="auto">
        Container content
      </Box>
    </div>
  )
}
