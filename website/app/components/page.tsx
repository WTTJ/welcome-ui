import { Card } from '@welcome-ui/card'
import { Flex } from '@welcome-ui/flex'
import { Grid } from '@welcome-ui/grid'
import { Text } from '@welcome-ui/text'
import Link from 'next/link'

import { getPages } from '@/build-app/utils/pages-components'
import { getName, getRepository } from '@/build-app/utils/transform-name'
import { getPageContent } from '@/build-app/utils/page-content'

const Page = () => {
  const pages = getPages()

  return (
    <Flex as="main" direction="column" gap="xl" margin="0 auto" maxWidth={1000} p="lg">
      <Text py="3xl" variant="h1">
        Components
      </Text>
      {pages.map(category => (
        <Flex direction="column" gap="md" key={category.category}>
          <Text variant="subtitle-md">{getName(category.category as string)}</Text>
          <Grid gap="lg" templateColumns={{ _: '1fr', lg: '1fr 1fr 1fr' }}>
            {category.pages.map(page => {
              const { data } = getPageContent(`${getRepository(page.id)}/docs/index.mdx`, true)

              return (
                <Link href={`/components/${page.id}`} key={page.id}>
                  <Card borderColor={{ hover: 'dark-200' }} borderRadius="md" p="md">
                    <Text variant="h5">{getName(page.id)}</Text>
                    <Text color="dark-700" lines={3} mt="sm" variant="sm">
                      {data?.description}
                    </Text>
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
