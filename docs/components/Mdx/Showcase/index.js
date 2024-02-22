import React from 'react'
import { Box } from '@welcome-ui/box'
import { Text } from '@welcome-ui/text'
import { Button } from '@welcome-ui/button'
import { GithubIcon, NpmIcon } from '@welcome-ui/icons'

import { H1 } from '../Headings'

import { Item } from './Item'

export function Showcase({
  component,
  customInstall,
  customUsage,
  description,
  name,
  pageName,
  version,
}) {
  return (
    <Box backgroundColor="nude-100" maxW="100% !important">
      <Box m="0 auto" maxW={970} px={{ md: 'md' }} py={{ xs: 'xxl', md: '4xl' }}>
        <H1 mb="0" pb="sm" pt="0">
          {component?.split(',')?.[0]}
        </H1>
        {description && <Text variant="body1">{description}</Text>}
        <Box mt="4xl">
          <Item content={version} name="version" />
          <Item content={`yarn add ${name}`} name="install" />
          <Item content={`import { ${component} } from '${name}'`} name="usage" />
          {customInstall && <Item content={customInstall} name="or install" />}
          {customUsage && (
            <Item content={customUsage} name={customInstall ? 'usage' : 'or usage'} />
          )}
        </Box>
        <Box mt="xxl">
          <Button
            alt="npm package"
            as="a"
            href={`https://www.npmjs.com/package/${name}`}
            rel="noopener noreferrer"
            size="sm"
            target="_blank"
            variant="tertiary"
          >
            <NpmIcon size="xs" />
            <span>View package</span>
          </Button>
          <Button
            as="a"
            href={`https://github.com/WTTJ/welcome-ui/tree/main/packages/${component}`}
            ml="md"
            size="sm"
            target="_blank"
            alt="github"
            variant="tertiary"
          >
            <GithubIcon size="xs" />
            <span>View source</span>
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
