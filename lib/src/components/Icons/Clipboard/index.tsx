import React from 'react'

import content from './content.json'

import { Icon, IconProps } from '@/Icon'

export const ClipboardIcon: React.FC<IconProps> = props => {
  return <Icon alt="Clipboard" content={content} {...props} />
}
