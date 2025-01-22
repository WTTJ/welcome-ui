import { Box } from 'welcome-ui/Box'
import { CodeBlockIcon, DownloadIcon, StarIcon } from 'welcome-ui/Icons'
import { Text } from 'welcome-ui/Text'

const stats = [
  {
    name: (
      <>
        Amazing
        <br />
        components
      </>
    ),
    number: '50+',
    icon: <CodeBlockIcon h={24} w={24} />,
  },
  {
    name: (
      <>
        Github
        <br />
        stars
      </>
    ),
    number: '600+',
    icon: <StarIcon h={24} w={24} />,
  },
  {
    name: (
      <>
        Weekly
        <br />
        Downloads
      </>
    ),
    number: '450+',
    icon: <DownloadIcon h={24} w={24} />,
  },
]

export const Stats = () => {
  return (
    <Box
      backgroundColor="neutral-10"
      borderRadius={64}
      display="flex"
      justifyContent="space-between"
      maxWidth={470}
      px={{ xs: 'xxl', md: '4xl' }}
      py="xxl"
      w="100%"
    >
      {stats?.map(stat => (
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          key={stat.number}
          textAlign="center"
        >
          <Box
            alignItems="center"
            backgroundColor="neutral-90"
            borderRadius={55}
            color="neutral-10"
            display="flex"
            h={55}
            justifyContent="center"
            w={55}
          >
            {stat.icon}
          </Box>
          <Text as="span" mt="lg" variant="h3">
            {stat.number}
          </Text>
          <Text as="span" mt="sm" variant="sm">
            {stat.name}
          </Text>
        </Box>
      ))}
    </Box>
  )
}
