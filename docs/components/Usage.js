/* eslint-disable react/prop-types */
import React from 'react'
import { Box } from '@welcome-ui/box'

import { Code } from './Code'

export const Usage = ({ component = '', name = '', peerDependencies = [] }) => {
  const dependencyList = Object.keys(peerDependencies).join(' ')
  return (
    <>
      <Code className="bash">{`yarn add ${name} ${dependencyList}`}</Code>
      <Box mt="lg">
        <Code language="bash">{`import { ${component} } from '${name}'`}</Code>
      </Box>
    </>
  )
}
