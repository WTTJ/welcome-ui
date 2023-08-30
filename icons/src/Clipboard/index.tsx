import React from 'react'
import { Icon, IconPanda, IconPandaProps, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ClipboardIcon: React.FC<IconProps> = props => {
  return <Icon alt="Clipboard" content={content} {...props} />
}

export const ClipboardIconPanda: React.FC<IconPandaProps> = props => {
  return <IconPanda content={content} {...props} />
}
