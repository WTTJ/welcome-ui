import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const CrossTargetIcon: React.FC<IconProps> = props => {
  return <Icon alt="CrossTarget" content={content} {...props} />
}
