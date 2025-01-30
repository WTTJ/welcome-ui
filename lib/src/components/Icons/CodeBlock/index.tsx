import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const CodeBlockIcon: React.FC<IconProps> = props => {
  return <Icon alt="CodeBlock" content={content} {...props} />
}
