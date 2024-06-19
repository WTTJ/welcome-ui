'use client'

import { Flex } from '@welcome-ui/flex'
import { Badge } from '@welcome-ui/badge'
import { Box } from '@welcome-ui/box'
import { Alert } from '@welcome-ui/alert'

import { H2 } from '../Mdx/Headings'
import { Highlight } from '../Mdx/Highlight'

type InstallationProps = {
  usage?: string
  packageName?: string
}

export const Installation = ({ packageName, usage }: InstallationProps) => {
  if (!packageName || !usage) {
    return (
      <Alert variant="error">
        <Alert.Title>Documentation missing</Alert.Title>
        Missing packageName and/or usage on data of component on
        packages/YOUR_COMPONENTS/docs/index.mdx
      </Alert>
    )
  }

  return (
    <>
      <H2>Installation</H2>
      <Flex alignItems="center" gap="sm">
        <Badge variant="primary">1</Badge>
        Run the following command:
      </Flex>
      <Box mb="xxl" ml="xl" mt="md">
        <Highlight code={`yarn add @welcome-ui/${packageName}`} language="shell" />
      </Box>
      <Flex alignItems="center" gap="sm">
        <Badge variant="primary">2</Badge>
        Import component:
      </Flex>
      <Box ml="xl">
        <Highlight code={usage} language="shell" />
      </Box>
    </>
  )
}
