import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CodeBlockIcon: React.FC<IconProps> = props => {
  return <Icon alt="CodeBlock" content={content} {...props} />
}

export const CodeBlockIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
