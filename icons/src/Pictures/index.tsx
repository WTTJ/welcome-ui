import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const PicturesIcon: React.FC<IconProps> = props => {
  return <Icon alt="Pictures" content={content} {...props} />
}
