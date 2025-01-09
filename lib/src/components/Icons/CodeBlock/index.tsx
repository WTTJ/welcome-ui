import React from 'react'

import { Icon, IconProps } from '../../Icon'

import content from './content.json'

export const CodeBlockIcon: React.FC<IconProps> = props => {
  return <Icon alt="CodeBlock" content={content} {...props} />
}
