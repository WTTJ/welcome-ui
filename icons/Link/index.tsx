import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const LinkIcon: React.FC<IconProps> = props => {
  return <Icon alt="Link" content={content} {...props} />
}
