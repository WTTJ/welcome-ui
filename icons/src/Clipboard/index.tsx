import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ClipboardIcon: React.FC<IconProps> = props => {
  return <Icon alt="Clipboard" content={content} {...props} />
}
