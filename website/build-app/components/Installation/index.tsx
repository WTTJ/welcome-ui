'use client'
import { Alert } from 'welcome-ui/Alert'
import { Flex } from 'welcome-ui/Flex'
import { Text } from 'welcome-ui/Text'

import { H2 } from '../Mdx/Headings'
import { Highlight } from '../Mdx/Highlight'

type InstallationProps = {
  deepDependencies?: string
  packageName?: string
  usage?: string
}

export const Installation = ({ deepDependencies = '', packageName, usage }: InstallationProps) => {
  if (!packageName || !usage) {
    return (
      <Alert variant="danger">
        <Alert.Title>Documentation missing</Alert.Title>
        Missing packageName and/or usage on data of component on
        packages/YOUR_COMPONENTS/docs/index.mdx
      </Alert>
    )
  }

  return (
    <>
      <H2>Installation</H2>
      <Flex gap="md" mt="xl">
        <Flex
          alignItems="center"
          backgroundColor="primary-40"
          borderRadius={30}
          flexShrink={0}
          h={30}
          justifyContent="center"
          w={30}
        >
          <Text as="span" variant="h5">
            1
          </Text>
        </Flex>
        <Flex flexDirection="column" w="100%">
          <Text>Run the following command:</Text>
          <Highlight language="shell">{`yarn add welcome-ui ${deepDependencies}`}</Highlight>
        </Flex>
      </Flex>
      <Flex gap="md" mt="xl">
        <Flex
          alignItems="center"
          backgroundColor="primary-40"
          borderRadius={30}
          flexShrink={0}
          h={30}
          justifyContent="center"
          w={30}
        >
          <Text as="span" variant="h5">
            2
          </Text>
        </Flex>
        <Flex flexDirection="column" w="100%">
          <Text>Import component:</Text>
          <Highlight language="shell">{`import { ${usage} } from 'welcome-ui/${packageName}'`}</Highlight>
        </Flex>
      </Flex>
    </>
  )
}
