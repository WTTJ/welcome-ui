import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const SourceIcon: React.FC<IconProps> = props => {
  return <Icon alt="Source" content={content} {...props} />
}
