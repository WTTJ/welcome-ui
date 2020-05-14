/* eslint-disable react/prop-types */
import React from 'react'

import { Code } from './Code'

export const Usage = ({ component = '', name = '', peerDependencies = [] }) => {
  const dependencyList = Object.keys(peerDependencies).join(' ')
  return (
    <>
      <Code isCopyable language="bash">{`yarn add ${name} ${dependencyList}`}</Code>
      <Code isCopyable language="bash">{`import { ${component} } from '${name}'`}</Code>
    </>
  )
}
