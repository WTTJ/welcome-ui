/* eslint-disable react/prop-types */
import React from 'react'

import { Code } from './Code'

export const Usage = ({ component = '', name = '', peerDependencies = [] }) => {
  const dependencyList = Object.keys(peerDependencies).join(' ')
  return (
    <>
      <Code language="bash" isCopyable>{`yarn add ${name} ${dependencyList}`}</Code>
      <Code language="bash" isCopyable>{`import { ${component} } from '${name}'`}</Code>
    </>
  )
}
