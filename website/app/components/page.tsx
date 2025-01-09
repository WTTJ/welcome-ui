import { Box, Card, Flex, Grid, Text } from 'welcome-ui'
import Link from 'next/link'
import { Metadata } from 'next'

import { getPages } from '@/build-app/utils/pages-components'
import { getName, getRepository } from '@/build-app/utils/transform-name'
import { getPageContent } from '@/build-app/utils/page-content'

export const metadata: Metadata = {
  title: 'Welcome UI - Components',
}

const Page = () => {
  const pages = getPages()

  return (
    <Flex as="main" direction="column" gap="xxl" margin="0 auto" maxWidth={1000} p="lg">
      <Text py="3xl" variant="h1">
        Components
      </Text>
      {pages.map(category => (
        <Flex direction="column" gap="md" key={category.category}>
          <Text as="h2" textTransform="uppercase" variant="h6">
            {getName(category.category as string)}
          </Text>
          <Grid gap="lg" templateColumns={{ _: '1fr', lg: '1fr 1fr' }}>
            {category.pages.map(page => {
              const { data } = getPageContent({
                filename: `${getRepository(page.id)}/docs/index.mdx`,
                isPackage: true,
              })

              return (
                <Link href={`/components/${page.id}`} key={page.id}>
                  <Card
                    alignItems="center"
                    borderColor={{ hover: 'neutral-30' }}
                    borderRadius="md"
                    display="flex"
                    gap="lg"
                    p="md"
                  >
                    <Box
                      backgroundColor="neutral-30"
                      borderRadius="md"
                      flexShrink={0}
                      h={80}
                      w={80}
                    />
                    <Box>
                      <Text as="h3" variant="h4">
                        {page.title}
                      </Text>
                      <Text color="neutral-70" lines={3} mt="sm" variant="sm">
                        {data?.description}
                      </Text>
                    </Box>
                  </Card>
                </Link>
              )
            })}
          </Grid>
        </Flex>
      ))}
    </Flex>
  )
}

export default Page
