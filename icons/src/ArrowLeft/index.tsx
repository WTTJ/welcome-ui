import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const ArrowLeftIcon: React.FC<IconProps> = props => {
  return <Icon alt="ArrowLeft" content={content} {...props} />
}
