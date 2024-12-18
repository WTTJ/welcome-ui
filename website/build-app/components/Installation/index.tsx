'use client'

import { Flex } from '@welcome-ui/flex'
import { Alert } from '@welcome-ui/alert'
import { Text } from '@welcome-ui/text'

import { H2 } from '../Mdx/Headings'
import { Highlight } from '../Mdx/Highlight'
import { MIGRATED_PACKAGES } from '../../../../migrated_packages'

type InstallationProps = {
  packageName?: string
  title?: string
  usage?: string
}

export const Installation = ({ packageName, title, usage }: InstallationProps) => {
  if (!packageName || !usage) {
    return (
      <Alert variant="danger">
        <Alert.Title>Documentation missing</Alert.Title>
        Missing packageName and/or usage on data of component on
        packages/YOUR_COMPONENTS/docs/index.mdx
      </Alert>
    )
  }

  const isMigratedPackage = title && MIGRATED_PACKAGES.includes(title)

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
          <Highlight language="shell">
            {isMigratedPackage ? 'yarn add welcome-ui' : `yarn add @welcome-ui/${packageName}`}
          </Highlight>
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
          <Highlight language="shell">
            {isMigratedPackage
              ? `import { ${usage} } from 'welcome-ui/${packageName}'`
              : `import { ${usage} } from '@welcome-ui/${packageName}'`}
          </Highlight>
        </Flex>
      </Flex>
    </>
  )
}
