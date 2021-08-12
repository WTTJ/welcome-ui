import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CodeIcon: React.FC<IconProps> = props => {
  return <Icon alt="Code" content={content} {...props} />
}
