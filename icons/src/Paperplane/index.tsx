import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PaperplaneIcon: React.FC<IconProps> = props => {
  return <Icon alt="Paperplane" content={content} {...props} />
}
