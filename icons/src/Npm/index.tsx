import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const NpmIcon: React.FC<IconProps> = props => {
  return <Icon alt="Npm" content={content} {...props} />
}
