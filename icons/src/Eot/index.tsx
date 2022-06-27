import React from 'react'
import { Icon, IconProps } from '@welcome-ui/icon'

import content from './content.json'

export const EotIcon: React.FC<IconProps> = props => {
  return <Icon alt="Eot" content={content} {...props} />
}
