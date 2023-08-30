import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CodeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Code" content={content} {...props} />
}

export const CodeIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
