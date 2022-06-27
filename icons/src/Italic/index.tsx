import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ItalicIcon: React.FC<IconProps> = props => {
  return <Icon alt="Italic" content={content} {...props} />
}
